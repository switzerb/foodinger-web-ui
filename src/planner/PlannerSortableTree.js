// Can override the following:
//
// style: PropTypes.shape({}),
// innerStyle: PropTypes.shape({}),
// reactVirtualizedListProps: PropTypes.shape({}),
// scaffoldBlockPxWidth: PropTypes.number,
// slideRegionSize: PropTypes.number,
// rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
// treeNodeRenderer: PropTypes.func,
// nodeContentRenderer: PropTypes.func,
// placeholderRenderer: PropTypes.func,

import nodeContentRenderer from './NodeContentRenderer';
import treeNodeRenderer from './TreeNodeRenderer';

export default {
    nodeContentRenderer,
    treeNodeRenderer,
    scaffoldBlockPxWidth: 25,
    rowHeight: 35,
    slideRegionSize: 50,
};