import { CustomField } from "proxima-sdk/schema/modelType";
import { PluginManifestChart } from "proxima-sdk/schema/types/chart";

export type ViewProps = Record<string, any>;

export type CommonViewProp = {
  id?: string;
  echartData?: any;
  option?: any;
  isListView?: boolean;
  isNoData?: boolean;
  isLoading?: boolean;
};
