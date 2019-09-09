import { HttpUrlEncodingCodec } from '@angular/common/http';


export class MyCustomHttpUrlEncodingCodec extends HttpUrlEncodingCodec {
    encodeKey(k: string): string {
        return super.encodeKey(k)
            .replace(new RegExp("%5B", "g"), "[")
            .replace(new RegExp("%5D", "g"), "]");
    }
}