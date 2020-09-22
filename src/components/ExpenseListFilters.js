import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { 
  setTextFilter, 
  sortByAmount, 
  sortByDate,
  setStartDate,
  setEndDate
} from '../actions/filters';

class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      calendarFocused: null
    }
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group_item">
            <input 
              className="text-input"
              type="text" 
              value={this.props.filters.text} 
              placeholder="Search expenses"
              onChange={(e) => {
              this.props.dispatch(setTextFilter(e.target.value))
            }}/>
          </div>
          <div className="input-group_item">
            <select 
              className="search_filters"
              value={this.props.filters.sortBy} 
              onChange={(e) => {
                if (e.target.value === 'date') {
                  this.props.dispatch(sortByDate(e.target.value))
                } else if (e.target.value === 'amount') {
                  this.props.dispatch(sortByAmount(e.target.value))
                }
            }}>
              <option value="date">
                Date
              </option>
              <option value="amount">
                Amount
              </option>
            </select>
          </div>
          <div className="input-group_item">
            <DateRangePicker          
              startDate={this.props.filters.startDate}
              startDateId="start"
              endDate={this.props.filters.endDate}
              endDateId="end"
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)