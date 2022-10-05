import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette:{
      mode:'light',
      background:{
        default:grey[400]
      },
      primary:{
        main:'#4a148c'
      },
      secondary:{
        main:'#19857b'
      },
      error:{
        main:red.A400
      }
    },
    components:{
      MuiAppBar:{
        styleOverrides:{
          root:{
            backgroundColor:'#4a148c',
            elevation:'0',
            position:'sticky'
          }
        }
      }
    }
  });
export default lightTheme