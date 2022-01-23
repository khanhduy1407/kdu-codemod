declare module '*.kdu' {
  import { defineComponent } from "kdu";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
