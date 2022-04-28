import { AxiosResponse } from 'axios'
import debug from 'debug'
import { Send } from '../interfaces/send'
import { error, warn } from '../utils/helper'
import { ajax } from '../utils/ajax'

const Debugger = debug('push:wechat-app')

type WechatAppOption = {
    /**
     * 企业ID，获取方式参考：[术语说明-corpid](https://work.weixin.qq.com/api/doc/90000/90135/91039#14953/corpid)
     *
     */
    WX_APP_APP_ID: string
    /**
     * 应用的凭证密钥，获取方式参考：[术语说明-secret](https://work.weixin.qq.com/api/doc/90000/90135/91039#14953/secret)
     *
     */
    WX_APP_SECRET: string
    /**
     * 模板ID
     *
     */
    WX_APP_TEMPLATE_ID: string
    /**
     * 指定接收消息的成员。若不指定则默认为 ”@all”。
     * 成员ID列表（多个接收者用‘|’分隔，最多支持1000个）。
     * 特殊情况：指定为”@all”，则向该企业应用的全部成员发送。
     *
     */
    WX_APP_USERID?: string


}



/**
* 企业服务号模板消息推送
* @name 
* @description 
* @author xbyyz
* @date 2022/04/18 14:26:25
*/

// export class WechatAppPush implements Send {
export class WechatAppPush  {


    private WX_APP_APP_ID: string
    private WX_APP_SECRET: string
    private WX_APP_TEMPLATE_ID: string
    private WX_APP_USERID?: string
    private ACCESS_TOKEN: string

    /**
     * ACCESS_TOKEN 的过期时间(时间戳)
     *
     * @private
     */
    private expiresTime: number

    constructor(option: WechatAppOption) {
        Debugger('option: %O', option)
        Object.assign(this, option)
        if (!this.WX_APP_APP_ID) {
            throw new Error('WX_APP_CORPID 是必须的！')
        }
        if (!this.WX_APP_SECRET) {
            throw new Error('WX_APP_SECRET 是必须的！')
        }
        if (!this.WX_APP_TEMPLATE_ID) {
            throw new Error('WX_APP_TEMPLATE_ID 是必须的！')
        }
        if (!this.WX_APP_USERID) {
            warn('未提供 WX_APP_USERID！将使用 "@all" 向全体成员推送')
            this.WX_APP_USERID = '@all'
        }
    }


    private async getAccessToken():Promise<string>{
        // token 未过期 或者 未强制刷新，则从内存中获取token
        var now = new Date().getTime();

        const res = await ajax({
          url: 'https://api.weixin.qq.com/cgi-bin/token?appid='+this.WX_APP_APP_ID+"&&secret="+ this.WX_APP_SECRET+'&&grant_type=client_credential',
          method: 'GET',
          data: {
            grant_type: 'client_credential',
            appid: this.WX_APP_APP_ID,
            secret:  this.WX_APP_SECRET
          }
        });
        console.log("get token--",res);
      const  token = res.data.access_token;
      const  expires_in =  new Date().getTime() + res.data.expires_in * 1000;
        return token;
      }

    // private async getAccessToken(): Promise<string> {
    //     const { data } = await ajax({
    //         url: 'https://qyapi.weixin.qq.com/cgi-bin/gettoken',
    //         query: {
    //             corpid: this.WX_APP_APP_ID,
    //             corpsecret: this.WX_APP_SECRET,
    //         },
    //     })
    //     if (data?.errcode !== 0) { // 出错返回码，为0表示成功，非0表示调用失败
    //         error(data?.errmsg)
    //         throw new Error(data?.errmsg || '获取 access_token 失败！')
    //     }
    //     const { access_token, expires_in = 7200 } = data
    //     Debugger('获取 access_token 成功: %s', access_token)
    //     this.extendexpiresTime(expires_in)
    //     return access_token
    // }
    /**
     * 延长过期时间
     *
     * @author CaoMeiYouRen
     * @date 2021-03-03
     * @private
     * @param expiresIn 延长的秒数
     */
    private extendexpiresTime(expiresIn: number): void {
        this.expiresTime = Date.now() + expiresIn * 1000 // 设置过期时间
    }

    // /**
    //  *
    //  *
    //  * @author CaoMeiYouRen
    //  * @date 2021-02-28
    //  * @param content 消息内容，最长不超过2048个字节，超过将截断（支持id转译）
    //  * @returns
    //  */
    // async send(content: string): Promise<AxiosResponse<any>> {
    //     Debugger('content: %s', content)
    //     if (!this.ACCESS_TOKEN || Date.now() >= this.expiresTime) {
    //         this.ACCESS_TOKEN = await this.getAccessToken()
    //     }
    //     return ajax({
    //         url: 'https://qyapi.weixin.qq.com/cgi-bin/message/send',
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         query: {
    //             access_token: this.ACCESS_TOKEN,
    //         },
    //         data: {
    //             touser: this.WX_APP_USERID,
    //             msgtype: 'text',
    //             agentid: this.WX_APP_USERID,
    //             text: {
    //                 content,
    //             },
    //         },
    //     })
    // }


    /**
     * 
     * @param data 
     * @param token 
     * @returns 
     */

    async pushService(data:any, token:any):Promise<AxiosResponse<any>>  {
        return ajax({
          url: `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${token}`,
          method: 'POST',
          data: JSON.stringify(data)
        });
      }

      async sendMsg(params:any) :Promise<any> {
        const {appId, appSecret, template_id, data, url, miniprogram, touser} = params;
        let  token = await this.getAccessToken();



        const res = await this.pushService(params, token)
        if (res.data && res.data.errcode === 40001 && res.data.errmsg.indexOf('access_token is invalid or not latest') > -1) {
        //   token = await this.getAccessToken({appId, appSecret, refreshToken: true});
        //   res = await this.pushService({data: params, token})
        }
        return res;
      }

      async getOpenId():Promise<AxiosResponse<any>>{
        let  token = await this.getAccessToken();
        console.log("--token--",token);
        const ll= await ajax({
            url:'https://api.weixin.qq.com/cgi-bin/user/get?next_openid=&&access_token='+token,
            method: 'GET'
          });

          for(var i=0;i<ll.data.data.openid.length;i++){

            const uu=await this.getUserInfo(token,ll.data.data.openid[i]);
            console.log("---userInfo",uu.data)
          }
          
          
        //  console.log("------llllll",ll);
         return ll
      }



   async getUserInfo(token:string,ll:string):Promise<AxiosResponse<any>>{

    return await ajax({
        url:'https://api.weixin.qq.com/cgi-bin/user/info?access_token='+token+"&&openid="+ll+"&&lang=zh_CN",
        method: 'GET'
      });
   }

}

/**
 * Test
 */
const ss:WechatAppOption = {
    WX_APP_APP_ID: "wx162fbe206503ac22",
   
    WX_APP_SECRET: "97dff88224a9e48897e12557367ffc44",
    
    WX_APP_TEMPLATE_ID: "qxI2t4kAd5q1x61l1m6pyqfyJxOvJGFJDsUTyMSxEaw",
    
    WX_APP_USERID: ""

};
const s=new WechatAppPush(ss);
const params={
appId:"wx162fbe206503ac22",
appSecret:"97dff88224a9e48897e12557367ffc44",
template_id:"qxI2t4kAd5q1x61l1m6pyqfyJxOvJGFJDsUTyMSxEaw",
data:"",
url:"",
miniprogram:"",
touser:"oEHI365gtP51yJhjRh81DkwzhwME"
};
 s.getOpenId();
 s.sendMsg(params);
console.log("----test-----");