import React, {
  Dispatch,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { Layout, Button, Space, Modal } from "antd";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { getActive, cloneAndForEach, reducer } from "./util";
import { CellData } from "./schemas/CellData";
import { WidgetGroups } from "../../constants/WidgetGroups";
import { DnDCell } from "./components/DnDCell";
import GridCellConfig from "./components/GridCellConfig";
import InputCellConfig from "./components/InputCellConfig";
import Form from "../Instance";
import {
  DispatchActiveProps,
  DispatchAddProps,
  DispatchDeleteActiveProps,
  DispatchEditProps,
  DispatchMoveProps,
  DispatchPositionedAddProps,
  DispatchPositionedMove,
  DispatchSetValueProps,
  DispatchUpdateProps,
  DispatchValidateProps,
} from "./schemas/ReducerAction";
import styled from "styled-components";
import DateCellConfig from "./components/DateCellConfig";
import SelectCellConfig from "./components/SelectCellConfig";
import WidgetGroup from "./components/WidgetGroup";
import CheckboxCellConfig from "./components/CheckboxCellConfig";

const { Sider, Content, Header } = Layout;

const rootCellData: CellData = {
  type: "grid",
  id: "11270307",
  lanes: [{ span: 24, cellDataList: [] }],
  active: false,
};

const RootCell = styled(DnDCell)`
  height: 100%;
  &:after {
    content: "Drag to drop";
    font-size: 32px;
    color: #d3d3d3;
    left: calc(50% - 85px);
    top: calc(50% - 25px);
    position: absolute;
    display: ${(props) =>
      props.cellData.lanes![0].cellDataList.length === 0 ? "block" : "none"};
  }

  > .lanes {
    height: 100%;
  }
`;

const WhiteLayout = styled(Layout)`
  background-color: white;
`;

const WhiteHeader = styled(Header)`
  background-color: white;
`;

const WhiteSider = styled(Sider)`
  background-color: white;
`;

const WhiteContent = styled(Content)`
  background-color: white;
`;

export const DesignerContext = React.createContext<
  Dispatch<
    | DispatchPositionedMove
    | DispatchPositionedAddProps
    | DispatchActiveProps
    | DispatchEditProps
    | DispatchMoveProps
    | DispatchAddProps
    | DispatchUpdateProps
    | DispatchDeleteActiveProps
    | DispatchSetValueProps
    | DispatchValidateProps
  >
>({} as Dispatch<any>);
const LeftSider = styled(WhiteSider).attrs({
  width: 280,
})`
  padding: 10px;
  border-right: 1px solid #d3d3d3;
`;
const RightSider = styled(WhiteSider).attrs({
  width: 280,
})`
  padding: 10px;
  border-left: 1px solid #d3d3d3;
`;
const FullHeightLayout = styled(WhiteLayout)`
  border-top: 1px solid #d3d3d3;
  height: calc(100% - 1px);
`;
const ToolBar = styled(WhiteHeader)`
  padding: 0 10px;
  text-align: right;
  border-bottom: 1px solid #a3a3a3;
`;
export const Designer = function () {
  const [data, designerDispatch] = useReducer(reducer, rootCellData);
  const [previewDialogVisible, setPreviewDialogVisible] = useState(false);
  const [previewData, setPreviewData] = useState<CellData | null>(null);
  const previewRef = useRef<any>();
  const delFunction = useCallback((event) => {
    if (event.keyCode === 46) {
      designerDispatch({
        type: "DELETE_ACTIVE",
      });
    }
  }, []);
  useEffect(() => {
    document.addEventListener("keyup", delFunction, false);
    return () => {
      document.removeEventListener("keyup", delFunction, false);
    };
  }, [delFunction]);
  const active = getActive(data);

  return (
    <>
      <DesignerContext.Provider value={designerDispatch}>
        <DndProvider backend={Backend}>
          <WhiteLayout style={{ height: "100%" }}>
            <WhiteHeader style={{ padding: "0 20px" }}>
              <h1>Dynamic Form Designer</h1>
            </WhiteHeader>
            <WhiteContent>
              <FullHeightLayout>
                <LeftSider>
                  {WidgetGroups.map((g) => (
                    <WidgetGroup key={g.name} name={g.name} list={g.widgets} />
                  ))}
                </LeftSider>
                <WhiteContent>
                  <WhiteLayout style={{ height: "100%" }}>
                    <ToolBar>
                      <Space>
                        <Button>Reset</Button>
                        <Button
                          onClick={() => {
                            setPreviewDialogVisible(true);
                            setPreviewData(
                              cloneAndForEach(data, function (item) {
                                item.id += +new Date();
                              })
                            );
                          }}
                        >
                          Preview
                        </Button>
                        <Button>Save</Button>
                      </Space>
                    </ToolBar>
                    <WhiteContent style={{ height: "100%", padding: 10 }}>
                      <RootCell cellData={data} index={0} />
                    </WhiteContent>
                  </WhiteLayout>
                </WhiteContent>
                <RightSider>
                  {active ? (
                    active.type === "grid" ? (
                      <GridCellConfig data={active} />
                    ) : active.type === "input" ? (
                      <InputCellConfig data={active} />
                    ) : active.type === "datetime" ? (
                      <DateCellConfig data={active} />
                    ) : active.type === "select" ? (
                      <SelectCellConfig data={active} />
                    ) : active.type === "checkbox" ? (
                      <CheckboxCellConfig data={active} />
                    ) : (
                      <></>
                    )
                  ) : (
                    <></>
                  )}
                </RightSider>
              </FullHeightLayout>
            </WhiteContent>
          </WhiteLayout>
        </DndProvider>
        <Modal
          width={1000}
          title={"Preview"}
          visible={previewDialogVisible}
          onCancel={() => setPreviewDialogVisible(false)}
          footer={[
            <Button
              onClick={() => {
                const result = previewRef.current!.getData();
                alert(JSON.stringify(result));
              }}
            >
              Save
            </Button>,
            <Button onClick={() => previewRef.current.validate()}>
              Validate
            </Button>,
          ]}
        >
          {previewData && (
            <Form
              ref={previewRef}
              data={cloneAndForEach(previewData, (data) => {
                data.value = data.defaultValue || data.value;
              })}
              key={previewData.id}
            />
          )}
        </Modal>
      </DesignerContext.Provider>
    </>
  );
};
