import { connect } from 'react-redux'
import { setVisibilityFilter } from './filter-slice'
import Link from './link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = { setVisibilityFilter }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
