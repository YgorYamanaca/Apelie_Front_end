import { IProduct } from './interdace-products';
import IOwner from './interface-owner';

export interface IStore {
  storeId: number;
  owner: IOwner;
  twitterAccount: string;
  category: string[];
  paymentMethods: Array;
  instagramAccount: string;
  state: string;
  facebookAccount: string;
  youtubeAccount: string;
  bannerUrl: string;
  theme: string;
  street: string;
  city: string;
  zipCode: string;
  name: string;
  email: string;
  phone: string;
  addressNumber: string;
  neighbourhood: string;
  rating: number;
  description: string;
  logoUrl: string;
  products: IProduct[];
  primaryColor: string;
  secondaryColor: string;
}

export interface IFirstRegister {
  name: string,
  logoImage: string,
  categories: string[],
  description: string,
}

export interface IDesignRegister {
  secondaryColor: string;
  primaryColor: string;
  bannerUrl: string,
}

export interface ISocialMediaRegister {
  facebookAccount: string,
  youtubeAccount: string,
  twitterAccount: string,
  instagramAccount: string,
}

export interface IAddressRegister {
  phone: string,
  addressNumber: string,
  neighbourhood: string,
  street: string,
  city: string,
  zipCode: string,
  state: string,
  email: string,
  zipCodeError?: string,
  addressNumberError?: string,
  phoneError?: string,
}
export interface IStoreRequestWithErrors extends IStoreRequest {
  zipCodeError?: string,
  addressNumberError?: string,
  phoneError?: string,
}

export interface IStoreRequest extends IFirstRegister, IDesignRegister, ISocialMediaRegister, IAddressRegister {}
export interface IStoreForm<T> {
  formTitle?: string,
  registerStoreRequestValue: T,
  changeStoreRequestFunction: (value: T) => void,
}
