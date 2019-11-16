import React, { useEffect } from 'react'
import Card from '../organism/Card'
import { getRecipes } from '../../redux/modules/recipe/actions'
import { connect } from 'react-redux'

const Recipe = ({ actionGetRecipes }) => {

  useEffect(() => {
    actionGetRecipes()
  }, [])

  return (
    <React.Fragment>
      <div>Home</div>
      <Card/>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  recipes: state.recipes.data
})

const mapDispatchToProps = {
  actionGetRecipes: getRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)