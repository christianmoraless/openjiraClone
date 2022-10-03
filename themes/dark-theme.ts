import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const darkTheme = createTheme({
    palette:{
        mode:'dark',
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
              backgroundColor:'#4a148c'
            }
          }
        }
      }
});
