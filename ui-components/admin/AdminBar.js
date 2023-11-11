import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import Bars4Icon from '@heroicons/react/24/outline/Bars4Icon'
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';


const drawerWidth = 240;

function AdminBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {appDetails}=useSelector(state=>state.app)
  const route=useRouter()
  
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

 const menu=[
  {text:"Dashboard",action:()=>route.push("/admin"),icon:"H"},
  {text:"ProductType",action:()=>route.push("/admin/productType"),icon:"P"},
  {text:"Product",action:()=>route.push("/admin/product"),icon:"P"}
 ]


  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menu.map((link, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={link.action}>
              <ListItemIcon>
                {link.icon}
              </ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Bars4Icon className="h-8 w-8"></Bars4Icon>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {appDetails?JSON.parse(appDetails.APP_DETAILS.S).shop_name:"Admin Pannel"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}



export default AdminBar;