import  React from 'react';

import classes from './BurgerIngredients.css';

const burgerIngredient = (props) => {
      let ingredient =null;

      switch(props.type){
        case('bread-bottom'):
              ingredient = <div classname={classes.BreadBottom}> </div>;
              break;

        case('bread-top'):
              ingredient =(
                <div classname={classes.BreadTop}>
                  <div classname={classes.Seeds1}></div>
                  <div classname={classes.Seeds2}></div>
                </div>
              );
              break;

        case('meat'):
          ingredient = <div classname={classes.Meat}></div>
          break;

        case('Cheese'):
          ingredient = <div classname={classes.Cheese}></div>
          break;

        case('bacon'):
          ingredient = <div classname={classes.Bacon}></div>
          break;

        case('salad'):
          ingredient = <div classname={classes.Salad}></div>
          break;

        default:
          ingredient=null;

      }
      return ingredient;
}

export default BurgerIngredient;
