import { TestLibConfig } from "./test-library.config";
import { InjectionToken } from "@angular/core";

// then define injectionToken
export const TestLibConfigService = new InjectionToken<TestLibConfig>(
  'TestLibConfig'
);
