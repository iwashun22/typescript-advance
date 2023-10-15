type Methods = {
  [key: string]: (...params: any[]) => any;
}

type choice = "yes" | "no";
type SomeArgsOnlyBool = {
  [key: string]: boolean | choice
}
const check: SomeArgsOnlyBool = {
  isPassed: true,
  ready: 'no',
  connected: false
}

const httpRequest: Methods = {
  get: (url: string) => {
    console.log("fetch", url);
    const data = [1,2,3].toString();
    return JSON.parse(data);
  },
  post: (url: string, data: Object, token: { isExpired: boolean, csrf_token: string }) => {
    if(token.isExpired) return { status: 400, error: new Error("Token Expired") }
    console.log(`Sending data ${JSON.stringify(data)} to ${url}`);
    // post something
    return { status: 200, data };
  }
}