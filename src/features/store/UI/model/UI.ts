export interface Modal {
  message: string;
  type: boolean;
}

export interface UIState extends Modal {
  isLoadingShowing: boolean;
}
