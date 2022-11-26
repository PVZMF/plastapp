import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { getCategories } from '../../api/api';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';

const drawerWidth = 240;

export default function PermanentDrawerRight() {
  const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    Promise.all([getCategories()])
      .then((results) => {
        setCategories(results[0]);
      })
      .finally(() => {
      });
  }, []);
  return (
    <Grid container width={"90%"} marginRight={2}>
      <Grid Item xs={4} bgcolor={"red"} >
        <Grid display={"flex"} flexDirection={"column"}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            subheader={<ListSubheader>دسته بندی ها</ListSubheader>}
          >
            {Categories.map(item => {
              return (
                <ListItem  key={item.id}>
                  {/* <ListItemIcon>
                      <img src={item.logo} alt="" />
                    </ListItemIcon> */}
                  <ListItemText sx={{textAlign:"right"}} id={item.id} primary={item.title} />
                  <Switch
                    dir='rtl'
                    edge="end"
                    onChange={handleToggle(item.id)}
                    checked={checked.indexOf(item.id) !== -1}
                    inputProps={{
                      'aria-labelledby': item.id,
                    }}
                  />
                </ListItem>
              )
            })}
          </List>



          {/* <Button>
            مواد اولیه
          </Button>
          <Button>
            سفارشات چاپی
          </Button>
          <Button>
            نایلون و نایلکس
          </Button>
          <Button>
            سلولزی
          </Button>
          <Button>
            خانه و آشپزخانه
          </Button>
          <Button>
            یکبار مصرف
          </Button>
          <Button>
            بهداشت و حمام
          </Button> */}
        </Grid>
      </Grid>
      <Grid Item xs={8} bgcolor={"blue"}>
        main
      </Grid>
    </Grid>
  );
}