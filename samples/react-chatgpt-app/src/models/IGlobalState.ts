import { ITheme } from '@fluentui/react';
import {
  BaseComponentContext,
  IReadonlyTheme,
} from '@microsoft/sp-component-base';

export  interface IGlobalState {
  theme:  ITheme | IReadonlyTheme  ;
  context: BaseComponentContext;
  lastConversation?: string;
  isDarkTheme: boolean;
  hasTeamsContext: boolean;
  chatId: string;
  appId: string;
  AzureFunctionUrl: string;
}
