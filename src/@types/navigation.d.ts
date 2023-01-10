export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        title: string;
        inDiet: boolean;
      };
      newMeal: {
        edit: boolean;
        name?: string;
      };
      status: {
        isHealthy: boolean;
      };
      details: {
        name: string;
        isHealthy: boolean;
      };
    }
  }
}
