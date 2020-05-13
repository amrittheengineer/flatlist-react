<h1
style="
color: #666;
background-color: #f2f2f2;
padding: 10px 20px;
">
FlatList React
</h1>

A helpful react utility component intended to simplify handling rendering list with ease.
It can handle `grouping`, `sorting`, `filtering`, `searching`, `sorting`, `paginating`, `styling` with very simple props.

---

###### Dear React Native Developer
This is not intended for React-Native usage. Although some features will still work, others will just break your application. Use at your own risk.

### Install

Make sure you are running **react** and **react-dom** version **16.8.0+**.

```npm install flatlist-react```

### Quick Start

Take in consideration the following list passed to component `PeopleList`:

```ts
// App.jsx
people = [
    {firstName: 'Elson', lastName: 'Correia', info: {age: 24}},
    {firstName: 'John', lastName: 'Doe', info: {age: 18}},
    {firstName: 'Jane', lastName: 'Doe', info: {age: 34}},
    {firstName: 'Maria', lastName: 'Carvalho', info: {age: 22}},
    {firstName: 'Kelly', lastName: 'Correia', info:{age: 23}},
    {firstName: 'Don', lastName: 'Quichote', info: {age: 39}},
    {firstName: 'Marcus', lastName: 'Correia', info: {age: 0}},
    {firstName: 'Bruno', lastName: 'Gonzales', info: {age: 25}},
    {firstName: 'Alonzo', lastName: 'Correia', info: {age: 44}}
  ]

  <PeopleList people={people}/>
```

Now inside your component file, we create a function `renderPerson` that will be passed to `renderItem`:

```tsx
// PeopleList.jsx
import FlatList from 'flatlist-react';

...

renderPerson = (person, idx) => {
  return (
      <li key={idx}>
        <b>{person.firstName} {person.lastName}</b> (<span>{person.info.age}</span>)
      </li>
  );
}

...

return (
    <ul>
        <FlatList
          list={this.props.people}
          renderItem={this.renderPerson}/>
    </ul>
)
```
### Full Documentation

| Features        | Props / Components        |
| :------------- | :------------- |
| [Components](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#complementary)  | [PlainList](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#plainlist) |
| [Rendering](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#rendering)      | [list](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#list-and-renderitem), [renderItem](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#list-and-renderitem), [renderWhenEmpty](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#renderwhenempty), [wrapperHtmlTag](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#wrapperhtmltag), [limit](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#limit), [reversed](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#reversed) |
| [Render Optimization](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#renderoptimization) | [renderOnScroll](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#renderonscroll) |
| [Pagination (Infinite Scroll)](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#pagination)   | [hasMoreItems](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#hasmoreitems), [loadMoreItems](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#loadmoreitems), [paginationLoadingIndicator](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#paginationloadingindicator), [paginationLoadingIndicatorPosition](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#paginationloadingindicatorposition) |
| [Filtering](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#filtering) | [filterBy](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#filterby) |
| [Searching](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#searching) | [search](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#search) ([searchTerm](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#searchterm), [searchBy](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#searchby), [searchOnEveryWord](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#searchoneveryword), [searchMinCharactersCount](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#searchmincharacterscount), [searchCaseInsensitive](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#searchcaseinsensitive))    |
| [Sorting](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#sorting)  | [sort](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#sort) ([sortBy](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#sortby), [sortCaseInsensitive](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#sortcaseinsensitive), [sortDescending](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#sortdescending))     |
| [Grouping](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#grouping) | [group](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#group) ([groupOf](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#groupof), [groupBy](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#groupby), [groupSeparator](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#groupseparator), [groupSeparatorAtTheBottom](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#groupseparatoratthebottom), [groupReversed](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#groupreversed), [groupSorted](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#groupsorted), [groupSortedBy](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#groupsortedby), [groupSortedDescending](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#groupsorteddescendiing), [groupSortedCaseInsensitive](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#groupsortedcaseinsensitive)) |
| [Styling](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#styling) | [display](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#display) ([displayGrid](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#displaygrid), [gridGap](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#gridgap), [minColumnWidth](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#mincolumnwidth), [displayRow](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#displayrow), [rowGap](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#rowgap))     |
| [scrollToTop](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#scrolltotop) |[scrollToTopButton](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#scrolltotopbutton), [scrollToTopOffset](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#scrolltotopoffset), [scrollToTopPadding](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#scrolltotoppadding), [scrollToTopPosition](https://github.com/ECorreia45/flatlist-react/blob/documentation/documentation/Doc.md#scrolltotopposition) |
