type choice = "yes" | "no";
type SomeArgsOnlyBool = {
  [key: string]: boolean | choice
}
const check: SomeArgsOnlyBool = {
  isPassed: true,
  ready: 'no',
  connected: false
}
check.strict = "yes";

type Methods = {
  [key: string]: (...params: any[]) => any;
}
type XHRMethods = {
  get(url: string): { status: number, data: JSON | Object | string },
  post<T extends Object>(url: string, data: T, token: { isExpired: boolean, csrf_token: string }): { status: number, data: T } | { status: number, error: Error }
}

const myRequest: XHRMethods & Methods = {
  get: (url) => {
    console.log("fetch", url);
    const data = [1,2,3].toString();
    return JSON.parse(data);
  },
  post: (url, data, token) => {
    if(token.isExpired) return { status: 400, error: new Error("Token Expired") }
    console.log(`Sending data ${JSON.stringify(data)} to ${url}`);
    // post something
    return { status: 200, data };
  },
  getUser: (url, username: string) => {
    console.log(`getting user ${username}'s data from ${url}`);
    return {
      status: 'online',
      profile: { name: 'Frank', email: 'frank@gmail.com' }
    }
  }
}
