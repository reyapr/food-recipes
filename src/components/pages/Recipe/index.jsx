import React, { useEffect } from 'react'
import Card from '../../organism/Card'
import { getRecipes } from '../../../redux/modules/recipe/actions'
import { connect } from 'react-redux'
import './styles.css'

const Recipe = ({ recipes, actionGetRecipes }) => {

  useEffect(() => {
    actionGetRecipes()
  }, [])

  return (
    <div className="content">
      <div className="content-item">
        <div className="grid-container">
        {
          recipes.map((recipe, index) => {
            return(
              <div className="grid-item" key={index}>
                <Card
                  name={recipe.name}
                  creator={recipe.creator}
                  review={recipe.review}
                  image={recipe.image}
                  rating={recipe.rating}
                />
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  recipes: state.recipes.data
})

const mapDispatchToProps = {
  actionGetRecipes: getRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)