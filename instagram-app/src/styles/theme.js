import { createTheme } from '@material-ui/core/styles';

export const globalMaterialUITheme = createTheme({
   palette: {
      boxShadows: {
         medium: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      }
   },
   customs: {
      borderRadius: {
         medium: 15
      }
   }
});
