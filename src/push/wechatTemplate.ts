let token, expires_in;
let request = require('request');
const wxTemplate = {
  sendMsg: async (params) => {
    const {appId, appSecret, template_id, data, url, miniprogram, touser} = params;
    token = await this.getAccessToken(appId, appSecret);
    res = await this.pushService({data: params, token})
    if (res.data && res.data.errcode === 40001 && res.data.errmsg.indexOf('access_token is invalid or not latest') > -1) {
      token = await this.getAccessToken({appId, appSecret, refreshToken: true});
      res = await this.pushService({data: params, token})
    }
    return res;
  },
  getAccessToken: async ({appId, appSecret, refreshToken}) => {
    // token 未过期 或者 未强制刷新，则从内存中获取token
    var now = new Date().getTime();
    if (token && expires_in && now < expires_in && !refreshToken) {
      return token;
    }
    const res = await request({
      url: 'https://api.weixin.qq.com/cgi-bin/token',
      method: 'GET',
      params: {
        grant_type: 'client_credential',
        appid: appId,
        secret: appSecret
      }
    });
    token = res.data.access_token;
    expires_in =  new Date().getTime() + res.data.expires_in * 1000;
    return res;
  },
  pushService: async ({data, token}) => {
    res = await request({
      url: `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${token}`
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
};
module.exports = wxTemplate;