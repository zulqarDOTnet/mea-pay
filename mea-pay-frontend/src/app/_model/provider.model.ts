import { FileHandle } from "./file-handle.model";

export interface Provider {
    providerId: number
    providerName: string,
    providerDescription: string,
    providerAPIURL: string,
    providerAPILogin: string,
    providerAPIPass: string,
    providerAPIMethod: string,
    providerAPIFormat: string,
    providerImages: FileHandle[]
}