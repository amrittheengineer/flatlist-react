import {
  array,
  arrayOf,
  bool,
  element,
  func,
  node,
  number,
  object,
  oneOf,
  oneOfType,
  shape,
  string,
} from "prop-types";
import { Ref } from "react";
import warning from "warning";
import {
  DisplayHandlerProps,
  DisplayInterface,
} from "./___subComponents/DisplayHandler";
import { InfiniteLoaderProps } from "./___subComponents/InfiniteLoader";
import { renderFunc } from "./___subComponents/uiFunctions";
import { GroupOptionsInterface } from "./___utils/groupList";
import { SearchOptionsInterface } from "./___utils/searchList";
import { SortOptionsInterface } from "./___utils/sortList";

function deprecated(propType: any, defaultVal: any, alternative: string) {
  return (
    props: any,
    propName: string,
    componentName: string,
    ...rest: any
  ) => {
    if (props[propName] !== defaultVal) {
      const message = `"${propName}" prop of "${componentName}" has been deprecated. Please use "${alternative}" instead.`;
      // eslint-disable-next-line no-unused-expressions
      const testing =
        process && process.env
          ? process.env.JEST_WORKER_ID !== undefined
          : false;

      if (!testing) {
        warning(false, message);
      }
    }

    return propType(props, propName, componentName, ...rest);
  };
}
export interface GroupInterface extends GroupOptionsInterface {
  of: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  separator:
    | JSX.Element
    | ((g: any, idx: number, label: string) => JSX.Element | null)
    | null;
  separatorAtTheBottom: boolean;
  sortBy: SortOptionsInterface["by"];
  sortDescending: boolean;
  sortCaseInsensitive: boolean;
}

export interface ScrollToTopInterface {
  button: JSX.Element | (() => JSX.Element);
  offset: number;
  padding: number;
  position: string;
}

export interface SortInterface extends SortOptionsInterface {
  groupBy: GroupInterface["sortBy"];
  groupDescending: GroupInterface["sortDescending"];
  groupCaseInsensitive: GroupInterface["sortCaseInsensitive"];
}

export interface Props<T> {
  __forwarededRef: Ref<HTMLElement>;
  // RENDER
  list: T[];
  renderItem: JSX.Element | renderFunc;
  renderWhenEmpty?: null | (() => JSX.Element);
  renderOnScroll?: boolean;
  limit?: number | string;
  reversed?: boolean;
  wrapperHtmlTag?: string;
  // sortingsortGroupBy
  sort?: boolean | SortInterface;
  sortBy?: SortInterface["by"];
  sortCaseInsensitive?: SortInterface["caseInsensitive"];
  sortDesc?: SortInterface["descending"];
  sortDescending?: SortInterface["descending"];
  sortGroupBy?: GroupInterface["sortBy"];
  sortGroupDesc?: GroupInterface["sortDescending"];
  sortGroupDescending?: GroupInterface["sortDescending"];
  sortGroupCaseInsensitive?: GroupInterface["sortCaseInsensitive"];
  // grouping
  group?: GroupInterface;
  showGroupSeparatorAtTheBottom?: GroupInterface["separatorAtTheBottom"];
  groupSeparatorAtTheBottom?: GroupInterface["separatorAtTheBottom"];
  groupReversed?: GroupInterface["reversed"];
  groupSeparator?: GroupInterface["separator"];
  groupBy?: GroupInterface["by"];
  groupOf?: GroupInterface["limit"];
  groupSorted?: boolean;
  groupSortedDescending?: GroupInterface["sortDescending"];
  groupSortedCaseInsensitive?: GroupInterface["sortCaseInsensitive"];
  // display
  display?: DisplayInterface;
  displayRow?: DisplayHandlerProps["displayRow"];
  rowGap?: DisplayHandlerProps["rowGap"];
  displayGrid?: DisplayHandlerProps["displayGrid"];
  gridGap?: DisplayHandlerProps["gridGap"];
  minColumnWidth?: DisplayHandlerProps["minColumnWidth"];
  // filtering
  filterBy?: string | ((item: T, idx: number) => boolean);
  // searching
  search?: SearchOptionsInterface<T>;
  searchTerm?: SearchOptionsInterface<T>["term"];
  searchBy?: SearchOptionsInterface<T>["by"];
  searchOnEveryWord?: SearchOptionsInterface<T>["everyWord"];
  searchCaseInsensitive?: SearchOptionsInterface<T>["caseInsensitive"];
  searchableMinCharactersCount?: SearchOptionsInterface<
    T
  >["minCharactersCount"];
  // pagination
  pagination?: InfiniteLoaderProps;
  hasMoreItems?: InfiniteLoaderProps["hasMore"];
  loadMoreItems?: null | InfiniteLoaderProps["loadMore"];
  paginationLoadingIndicator?: InfiniteLoaderProps["loadingIndicator"];
  paginationLoadingIndicatorPosition?: InfiniteLoaderProps["loadingIndicatorPosition"];
  // scrollToTop
  scrollToTop?: boolean | ScrollToTopInterface;
  scrollToTopButton?: JSX.Element | (() => JSX.Element);
  scrollToTopOffset?: number;
  scrollToTopPadding?: number;
  scrollToTopPosition?: string;
  // others
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const defaultProps = {
  __forwarededRef: { current: null },
  // RENDER
  limit: 0,
  renderWhenEmpty: null,
  reversed: false,
  renderOnScroll: false,
  wrapperHtmlTag: "",
  // DISPLAY
  display: {
    grid: false,
    gridGap: "",
    gridMinColumnWidth: "",
    row: false,
    rowGap: "",
  },
  displayGrid: false,
  displayRow: false,
  gridGap: "",
  rowGap: "",
  minColumnWidth: "",
  // FILTER
  filterBy: "",
  // GROUPS
  group: {
    by: "",
    limit: 0, // deprecated
    of: 0,
    reversed: false,
    separator: null,
    separatorAtTheBottom: false,
    sortedBy: "",
    sortBy: "", // deprecated
    sorted: false,
    sortedCaseInsensitive: false,
    sortCaseInsensitive: false, // deprecated
    sortedDescending: false,
    sortDescending: false, // deprecated
  },
  groupBy: "",
  groupOf: 0,
  groupReversed: false,
  groupSeparator: null,
  groupSeparatorAtTheBottom: false,
  groupSorted: false,
  groupSortedBy: "",
  groupSortedDescending: false,
  groupSortedCaseInsensitive: false,
  showGroupSeparatorAtTheBottom: false, // deprecated
  // PAGINATION
  pagination: {
    hasMore: false,
    loadMore: null,
    loadingIndicator: null,
    loadingIndicatorPosition: "",
  },
  hasMoreItems: false,
  loadMoreItems: null,
  paginationLoadingIndicator: null,
  paginationLoadingIndicatorPosition: "",
  // SCROLL TO TOP
  scrollToTop: {
    button: null,
    offset: 50,
    padding: 20,
    position: "bottom right",
  },
  scrollToTopButton: null,
  scrollToTopOffset: 50,
  scrollToTopPadding: 20,
  scrollToTopPosition: "bottom right",
  // SEARCH
  search: {
    by: "",
    caseInsensitive: false,
    everyWord: false, // deprecated
    onEveryWord: false,
    minCharactersCount: 0,
    term: "",
  },
  searchBy: "",
  searchCaseInsensitive: false,
  searchOnEveryWord: false,
  searchTerm: "",
  searchMinCharactersCount: 0,
  searchableMinCharactersCount: 0, // deprecated
  // SORT
  sort: {
    by: "",
    caseInsensitive: false,
    descending: false,
    groupBy: "", // deprecated
    groupCaseInsensitive: false, // deprecated
    groupDescending: false, // deprecated
  },
  sortBy: "",
  sortCaseInsensitive: false,
  sortDesc: false, // deprecated
  sortDescending: false,
  sortGroupBy: "", // deprecated
  sortGroupDesc: false, // deprecated
  sortGroupCaseInsensitive: false, // deprecated
};

export const propTypes = {
  __forwarededRef: object,
  // RENDER
  list: oneOfType([array, object]).isRequired,
  renderItem: oneOfType([func, node]).isRequired,
  limit: oneOfType([number, string]),
  renderWhenEmpty: func,
  reversed: bool,
  renderOnScroll: bool,
  wrapperHtmlTag: string,
  // DISPLAY
  display: shape({
    grid: bool,
    gridColumnWidth: string,
    gridGap: string,
    row: bool,
    rowGap: string,
  }),
  displayGrid: bool,
  displayRow: bool,
  gridGap: string,
  rowGap: string,
  minColumnWidth: string,
  // FILTER
  filterBy: oneOfType([func, string]),
  // GROUPS
  group: shape({
    by: oneOfType([func, string]),
    limit: deprecated(number, defaultProps.group.limit, "group.of"), // deprecated
    of: number,
    reversed: bool,
    separator: oneOfType([node, func, element]),
    separatorAtTheBottom: bool,
    sortedBy: oneOfType([
      string,
      arrayOf(
        oneOfType([
          string,
          shape({ by: string, caseInsensitive: bool, descending: bool }),
        ])
      ),
    ]),
    sortBy: deprecated(
      oneOfType([
        string,
        arrayOf(
          oneOfType([
            string,
            shape({ by: string, caseInsensitive: bool, descending: bool }),
          ])
        ),
      ]),
      defaultProps.group.sortBy,
      "sortedBy"
    ), // deprecated
    sortedCaseInsensitive: bool,
    sortCaseInsensitive: deprecated(
      bool,
      defaultProps.group.sortCaseInsensitive,
      "sortedCaseInsensitive"
    ), // deprecated
    sortedDescending: bool,
    sortDescending: deprecated(
      bool,
      defaultProps.group.sortDescending,
      "sortedDescending"
    ), // deprecated
  }),
  groupBy: oneOfType([func, string]),
  groupOf: number,
  groupReversed: bool,
  groupSeparator: oneOfType([node, func, element]),
  groupSeparatorAtTheBottom: bool,
  showGroupSeparatorAtTheBottom: deprecated(
    bool,
    defaultProps.showGroupSeparatorAtTheBottom,
    "groupSeparatorAtTheBottom"
  ), // deprecated
  groupSorted: bool,
  groupSortedBy: oneOfType([
    string,
    arrayOf(
      oneOfType([
        string,
        shape({ by: string, caseInsensitive: bool, descending: bool }),
      ])
    ),
  ]),
  groupSortedDescending: bool,
  groupSortedCaseInsensitive: bool,
  // PAGINATION
  // PAGINATE
  pagination: shape({
    hasMore: bool,
    loadMore: func,
    loadingIndicator: oneOfType([node, func, element]),
    loadingIndicatorPosition: string,
  }),
  hasMoreItems: bool,
  loadMoreItems: func,
  paginationLoadingIndicator: oneOfType([node, func, element]),
  paginationLoadingIndicatorPosition: oneOf(["left", "center", "right", ""]),
  // SCROLL TO TOP
  scrollToTop: oneOfType([
    bool,
    shape({
      button: oneOfType([node, element, func]),
      offset: number,
      padding: number,
      position: oneOf(["top right", "top left", "bottom right", "bottom left"]),
    }),
  ]),
  scrollToTopButton: oneOfType([node, element, func]),
  scrollToTopOffset: number,
  scrollToTopPadding: number,
  scrollToTopPosition: oneOf([
    "top right",
    "top left",
    "bottom right",
    "bottom left",
  ]),
  // SEARCH
  search: shape({
    by: oneOfType([
      func,
      string,
      arrayOf(
        oneOfType([string, shape({ by: string, caseInsensitive: bool })])
      ),
    ]),
    caseInsensitive: bool,
    everyWord: deprecated(
      bool,
      defaultProps.search.everyWord,
      "search.onEveryWord"
    ), // deprecated
    onEveryWord: bool,
    minCharactersCount: number,
    term: string,
  }),
  searchBy: oneOfType([
    func,
    string,
    arrayOf(oneOfType([string, shape({ by: string, caseInsensitive: bool })])),
  ]),
  searchCaseInsensitive: bool,
  searchOnEveryWord: bool,
  searchableMinCharactersCount: deprecated(
    number,
    defaultProps.searchableMinCharactersCount,
    "searchMinCharactersCount"
  ), // deprecated
  searchMinCharactersCount: number,
  searchTerm: string,
  // SORT
  sort: oneOfType([
    bool,
    shape({
      by: oneOfType([
        string,
        arrayOf(
          oneOfType([
            string,
            shape({ by: string, caseInsensitive: bool, descending: bool }),
          ])
        ),
      ]),
      caseInsensitive: bool,
      descending: bool,
      groupBy: string,
      groupCaseInsensitive: bool,
      groupDescending: bool,
    }),
  ]),
  sortBy: oneOfType([
    string,
    arrayOf(
      oneOfType([
        string,
        shape({ by: string, caseInsensitive: bool, descending: bool }),
      ])
    ),
  ]),
  sortCaseInsensitive: bool,
  sortDesc: bool,
  sortDescending: bool,
  sortGroupBy: deprecated(
    oneOfType([
      string,
      arrayOf(
        oneOfType([
          string,
          shape({ by: string, caseInsensitive: bool, descending: bool }),
        ])
      ),
    ]),
    defaultProps.sortGroupBy,
    "groupSortedBy"
  ), // deprecated
  sortGroupDesc: deprecated(
    bool,
    defaultProps.sortGroupDesc,
    "groupSortedDescending"
  ), // deprecated
  sortGroupCaseInsensitive: deprecated(
    bool,
    defaultProps.sortGroupCaseInsensitive,
    'Use "groupSeparatorAtTheBottom"'
  ), // deprecated
};
