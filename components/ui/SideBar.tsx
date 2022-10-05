import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const menuItem:string[]=['Inbox','Starred','Send Email','Drafts'];
export const SideBar = () => {
  return (
    <Drawer
        anchor="left"
        open={true}
        onClose={() => console.log('cerrando')}>
            
        <Box sx={{width:250}}>
            <Box sx={{padding:'5px 10px'}}>
                <Typography variant="h4">Menú</Typography>
            </Box>
            <List> 
                {
                    menuItem.map((text,index) => (
                        <ListItem>
                            <ListItemIcon>
                                { index % 2 ? <InboxOutlinedIcon/> : <MailOutlineOutlinedIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))
                }
            </List>
            <Divider/>
            <List>
                {
                    menuItem.map((text,index) => (
                        <ListItem>
                            <ListItemIcon>
                                { index % 2 ? <InboxOutlinedIcon/> : <MailOutlineOutlinedIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
        
    </Drawer>
  )
}
