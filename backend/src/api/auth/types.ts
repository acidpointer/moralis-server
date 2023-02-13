export interface RequestMessage {
  address: string;
  chain: string;
  networkType: string;
}

export interface ParseUser {
  objectId: string;
}

export interface VerifyMessage {
  network: string;
  signature: string;
  message: string;
}