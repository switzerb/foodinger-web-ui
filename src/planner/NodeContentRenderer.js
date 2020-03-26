import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isDescendant } from '../util/treeData';
import "./plannerTree.css";

import {
    DragIndicator,
    ExpandMore,
    ChevronRight
} from "@material-ui/icons";

function classnames(...classes) {
    // Use Boolean constructor as a filter callback
    // Allows for loose type truthy/falsey checks
    // Boolean("") === false;
    // Boolean(false) === false;
    // Boolean(undefined) === false;
    // Boolean(null) === false;
    // Boolean(0) === false;
    // Boolean("classname") === true;
    return classes.filter(Boolean).join(' ');
}

class NodeContentRenderer extends Component {

    dragHandle() {
        const { canDrag, node, connectDragSource } = this.props;
        let handle;
        if (canDrag) {
            if (typeof node.children === 'function' && node.expanded) {
                // Show a loading symbol on the handle when the children are expanded
                //  and yet still defined by a function (a callback to fetch the children)
                handle = (
                    <div className="rst__loadingHandle on">
                        <div className="rst__loadingCircle">
                            {[...new Array(12)].map((_, index) => (
                                <div
                                    // eslint-disable-next-line react/no-array-index-key
                                    key={index}
                                    className={classnames(
                                        'rst__loadingCirclePoint'
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                );
            } else {
                // Show the handle used to initiate a drag-and-drop
                handle = connectDragSource(<div className="drag"><DragIndicator/></div>, {
                    dropEffect: 'copy',
                });
            }
        }
        return handle;
    }

    renderCollapse() {
        const {
            node,
            path,
            toggleChildrenVisibility,
            treeIndex,
            isDragging,
            scaffoldBlockPxWidth
        } = this.props;
        return (
            <div>
                {
                    node.expanded ?
                        <ExpandMore
                            className="expander"
                            onClick={() =>
                                toggleChildrenVisibility({
                                    node,
                                    path,
                                    treeIndex,
                                })
                            }
                        /> :
                        <ChevronRight
                            className="expander"
                            onClick={() =>
                                toggleChildrenVisibility({
                                    node,
                                    path,
                                    treeIndex,
                                })
                            }
                        />
                }

                {node.expanded && !isDragging && (
                    <div style={{ width: scaffoldBlockPxWidth }}/>
                )}
            </div>
        )
    }

    renderButtonToolbar() {
        const { buttons } = this.props;
        return (<div className="actions">
            {buttons.map((btn, index) => (
                <div key={index} className="icons">
                    {btn}
                </div>
            ))}
        </div>)
    }

    renderTitle() {
        const { node, title, path, treeIndex } = this.props;
        const nodeTitle = title || node.title;

        return <span
            className={classnames(
                'rst__rowTitle',
                node.subtitle && 'rst__rowTitleWithSubtitle'
            )}
        >
                    {typeof nodeTitle === 'function'
                        ? nodeTitle({
                            node,
                            path,
                            treeIndex,
                        })
                        : nodeTitle}
                  </span>
    }

    renderSubtitle() {
        const { node, subtitle, path, treeIndex } = this.props;
        const nodeSubtitle = subtitle || node.subtitle;

        return nodeSubtitle && (
            <span className="rst__rowSubtitle">
                      {typeof nodeSubtitle === 'function'
                          ? nodeSubtitle({
                              node,
                              path,
                              treeIndex,
                          })
                          : nodeSubtitle}
                    </span>)
    }

    renderRow() {
        const {
            scaffoldBlockPxWidth,
            toggleChildrenVisibility,
            connectDragPreview,
            connectDragSource,
            isDragging,
            canDrop,
            canDrag,
            node,
            draggedNode,
            path,
            treeIndex,
            isSearchMatch,
            isSearchFocus,
            className,
            style,
            didDrop,
            treeId,
            isOver, // Not needed, but preserved for other renderers
            parentNode, // Needed for dndManager
            ...otherProps
        } = this.props;

        const isDraggedDescendant = draggedNode && isDescendant(draggedNode, node);
        const isLandingPadActive = !didDrop && isDragging;

        return (
            <div className={ node.type === "section" ? 'section' : 'rowWrapper'} style={{ marginLeft: (scaffoldBlockPxWidth * path.length) + "px" }}>
                {/* Set the row preview to be used during drag and drop */}
                {connectDragPreview(
                    <div
                        className={classnames(
                            'row',
                            isLandingPadActive && 'rst__rowLandingPad',
                            isLandingPadActive && !canDrop && 'rst__rowCancelPad',
                            isSearchMatch && 'rst__rowSearchMatch',
                            isSearchFocus && 'rst__rowSearchFocus',
                            className
                        )}
                        style={{
                            opacity: isDraggedDescendant ? 0.5 : 1,
                            ...style,
                        }}
                    >
                        { canDrag ? this.dragHandle() : null }
                        {
                            toggleChildrenVisibility &&
                            node.children &&
                            (node.children.length > 0 || typeof node.children === 'function') &&
                            this.renderCollapse()
                        }
                        <div className='rowContents'>
                            <div className={'rst__rowLabel'}>
                                { this.renderTitle() }
                                { this.renderSubtitle() }
                            </div>
                            { this.renderButtonToolbar() }
                        </div>
                    </div>
                )}
            </div>
        )
    }

    render() {
        const {node, ...otherProps} = this.props;

        return (
            <div style={{ height: '100%' }} {...otherProps}>
                { this.renderRow() }
            </div>
        );
    }
}

NodeContentRenderer.defaultProps = {
    isSearchMatch: false,
    isSearchFocus: false,
    canDrag: false,
    toggleChildrenVisibility: null,
    buttons: [],
    className: '',
    style: {},
    parentNode: null,
    draggedNode: null,
    canDrop: false,
    title: null,
    subtitle: null,
    rowDirection: 'ltr',
};

NodeContentRenderer.propTypes = {
    node: PropTypes.shape({}).isRequired,
    title: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    subtitle: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    path: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ).isRequired,
    treeIndex: PropTypes.number.isRequired,
    treeId: PropTypes.string.isRequired,
    isSearchMatch: PropTypes.bool,
    isSearchFocus: PropTypes.bool,
    canDrag: PropTypes.bool,
    scaffoldBlockPxWidth: PropTypes.number.isRequired,
    toggleChildrenVisibility: PropTypes.func,
    buttons: PropTypes.arrayOf(PropTypes.node),
    className: PropTypes.string,
    style: PropTypes.shape({}),

    // Drag and drop API functions
    // Drag source
    connectDragPreview: PropTypes.func.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    parentNode: PropTypes.shape({}), // Needed for dndManager
    isDragging: PropTypes.bool.isRequired,
    didDrop: PropTypes.bool.isRequired,
    draggedNode: PropTypes.shape({}),
    // Drop target
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool,

    // rtl support
    rowDirection: PropTypes.string,
};

export default NodeContentRenderer;
