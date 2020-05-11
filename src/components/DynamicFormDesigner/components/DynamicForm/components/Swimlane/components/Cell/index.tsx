import React, {useContext, useRef} from "react";
import {useDrag, useDrop, XYCoord} from "react-dnd";
import {CellData} from "../../../../../../schemas/CellData";
import {DynamicFormDesignerContext} from "../../../../../../index";
import {DynamicFormContext} from "../../../../index";
import {InputCell} from "./components/InputCell";
import {GridCell} from "./components/GridCell";

interface CellProps {
    cellData: CellData;
    layout?: 'inline' | 'default';
    index: number;
}

interface DragItem {
    index: number;
    id: string;
    type: string;
}

export const Cell = function ({cellData, index, layout}: CellProps) {
    const data = {
        ...cellData,
        required: false,
        warningable: false,
        layout: 'default',
        labeled: true
    };
    const ref = useRef<any>(null);
    const designerDispatch = useContext(DynamicFormDesignerContext);
    const [, drop] = useDrop({
        accept: ['instance'],
        hover(item: DragItem, monitor) {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current!.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            if (!clientOffset) {
                return;
            }
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            designerDispatch({
                type: 'MOVE',
                dragIndex: dragIndex,
                hoverIndex: hoverIndex,
                id: item.id
            });
            item.index = hoverIndex;
        },
    });

    const [, drag] = useDrag({
        item: {type: 'instance', id: cellData.id, index},
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    drag(drop(ref));

    const dispatch = useContext(DynamicFormContext);
    if (cellData.type === 'input') {
        return <div ref={ref} className={'instance'}>
            <span className={'id'}>{data.id}</span>
            <InputCell element={data} dispatch={dispatch} layout={layout}/>
        </div>;
    } else if (cellData.type === 'grid') {
        return <div ref={ref} className={'instance'}>
            <span className={'id'}>{data.id}</span>
            <GridCell element={data}/>
        </div>
    } else {
        return <></>;
    }
}