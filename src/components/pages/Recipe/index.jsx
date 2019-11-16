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
    <div >
      <div>Home</div>
      <div className="content">
        <div className="content-item">
          <div className="grid-container">
          {
            recipes.map((recipe, index) => {
              return(
                <Card key={index}/>
              )
            })
          }
          </div>
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