import React, { Component } from 'react';
import { ReactiveBase, DataSearch, DateRange, RangeSlider, ResultCard } from '@appbaseio/reactivesearch';

import './App.css';

export default class Main extends Component {
    state = {}

    render() {
        return (
            <div className="container">
            <ReactiveBase
                app="uboat"
                credentials="i278ZlbWK:60641181-3bde-42f1-bdde-3a51daea9f77"
                theme={{
                    primaryColor: '#FF3A4E',
                }}
            >
                <nav className="nav">
                    <div className="title">Stowaway</div>
                    <DataSearch
                        componentId="SearchSensor"
                        dataField="name"
                        autosuggest={false}
                        placeholder="Search by boat names"
                        iconPosition="left"
                        className="search"
                        highlight={true}
                    />
                </nav>
                <div className="left-col">
                    <DateRange
                        dataField="date_from"
                        componentId="DateRangeSensor"
                        title="When"
                        numberOfMonths={2}
                        queryFormat="basic_date"
                        initialMonth={new Date('04-01-2017')}
                    />
    
                    
                    <RangeSlider
                        componentId="PriceSensor"
                        dataField="price"
                        title="Price Range"
                        range={{
                            start: 250,
                            end: 5000,
                        }}
                        rangeLabels={{
                            start: '$250',
                            end: '$5000',
                        }}
                        defaultSelected={{
                            start: 10,
                            end: 50,
                        }}
                        stepValue={10}
                        interval={50}
                        react={{
                            and: ['DateRangeSensor'],
                        }}
                    />
                </div>
    
                <ResultCard
                    className="right-col"
                    componentId="SearchResult"
                    dataField="name"
                    size={12}
                    onData={data => ({
                        image: data.image,
                        title: data.name,
                        description: (
                            <div>
                                <div className="price">${data.price}</div>
                            </div>
                        ),
                        url: data.listing_url,
                    })}
                    pagination={false}
                    react={{
                        and: ['SearchSensor', 'GuestSensor', 'PriceSensor', 'DateRangeSensor', 'search'],
                    }}
                    innerClass={{
                        resultStats: 'result-stats',
                        list: 'list',
                        listItem: 'list-item',
                        image: 'image',
                    }}
                />
            </ReactiveBase>
        </div>
             )}
    };