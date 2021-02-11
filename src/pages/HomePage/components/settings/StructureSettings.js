import React from "react";
import { changeStructurePadding } from "../../../../actions/componentsAction";

import { setSelected } from "../../../../actions/optionsAction";
import {
  modifyColumnStructure,
  setIndependentBorder,
  setMobileStack,
  setSelectedColumn,
} from "../../../../actions/structureAction";
import Button from "../../../../common/components/atoms/Button";
import HorizontalRule from "../../../../common/components/atoms/HorizontalRule";
import Text from "../../../../common/components/atoms/Text";
import Paper from "../../../../common/components/molecules/Paper";
import Slider from "../../../../common/components/molecules/Slider";
import Knob from "../../../../common/components/organisms/Knob";
import MarginSet from "../../../../common/components/organisms/MarginSet";
import LeftArrow from "../../../../utils/icons/LeftArrow";

import { BORDER_TYPES, COLUMN_TYPES, IMAGE_WARNING } from "../../data";
import { camelCase, funcMap, textCapitalize } from "../../data/helper";

const StructureSettings = ({
  type,
  component,
  structure,
  settings,
  dispatch,
}) => {
  const selectedColumn = structure.selectedColumn;
  const contentIndex = component.currentActiveBlock.contentIndex;
  const activeContent = component.contents[contentIndex];
  const onHandleSettingsExit = () => dispatch(setSelected({ selected: false }));

  const onHandleColumnChange = (column) => dispatch(setSelectedColumn(column));

  const onChangeColumn = (status) => {
    if (structure.columns > 1 && structure.columns < 4)
      dispatch(modifyColumnStructure(status));
    else if (structure.columns === 4 && status === -1)
      dispatch(modifyColumnStructure(status));
    else if (structure.columns === 1 && status === 1)
      dispatch(modifyColumnStructure(status));
  };

  const onChangeVerticalPadding = (status) =>
    dispatch(changeStructurePadding({ value: status }));

  const onSliderChange = (type) => {
    switch (type) {
      case "BORDER":
        dispatch(setIndependentBorder());
        break;
      case "STACK":
        dispatch(setMobileStack());
    }
  };

  const onHandleProperties = (value, prop, index = 0) =>
    dispatch(funcMap[prop](value, index));

  const onHandleBorder = (val, type, prop) => {
    let border = activeContent.columns[selectedColumn - 1][
      `border${textCapitalize(prop)}`
    ].split(" ");
    if (type === "color") border.splice(2, 1, val);
    else if (type === "type") borderArr.splice(1, 1, val);
    dispatch(
      funcMap[`column-border-${prop}`](border.join(" "), selectedColumn)
    );
  };

  return (
    <div className="settings">
      <div className="settings__type u-margin-top-light">
        <Text className="text-tertiary" content={type} />
        <div className="settings__back" onClick={onHandleSettingsExit}>
          <span>
            <LeftArrow />
          </span>
          <span>
            <Text content="BACK" />
          </span>
        </div>
      </div>
      <div className="settings__scroll u-margin-top-light u-padding-small">
        <div>
          <Text content="Columns" />
          <div className="u-margin-top-light">
            <Knob
              onHandleClick={onChangeColumn}
              content={activeContent.columns.length}
            />
          </div>
        </div>
        <div className="u-margin-top-small">
          <div className="row">
            <div className="col-1-of-2">
              <div>
                <Text content="Top & Bottom padding" />
              </div>
              <div className="u-margin-top-light">
                <Knob
                  onHandleClick={onChangeVerticalPadding}
                  content={`${activeContent.verticalPadding}px`}
                />
              </div>
            </div>
            <div className="col-1-of-2">
              <div>
                <Text content="Background Color" />
              </div>
              <div className="u-margin-top-light">
                <Paper
                  onHandleColor={(val) =>
                    onHandleProperties(val, "structBackground", selectedColumn)
                  }
                  properties={{
                    color: activeContent.background,
                    text: activeContent.background,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="u-margin-top-light u-display-flex-between">
          <span>
            <Text content="Do not stack column on mobile" />
          </span>
          <span>
            <Slider
              sliderValue={structure.setMobileStack}
              onSliderValueChange={() => onSliderChange("STACK")}
            />
          </span>
        </div>
        <HorizontalRule />
        <div>
          <Text className="settings__heading" content="Border" />
        </div>
        <div className="row u-margin-bottom-none">
          <div className="col-1-of-3">&nbsp;</div>
          <div className="col-2-of-3">
            <div className="u-display-flex-between">
              <span>
                <Text content="Independent borders" />
              </span>
              <span>
                <Slider
                  sliderValue={structure.independentBorders}
                  onSliderValueChange={() => onSliderChange("BORDER")}
                />
              </span>
            </div>
          </div>
        </div>
        <div>
          {BORDER_TYPES.map((border, idx) => {
            return (
              <div key={idx}>
                <Text
                  className="u-margin-top-light"
                  content={border
                    .split("-")
                    .map((b) => textCapitalize(b))
                    .join(" ")}
                />
                <Paper
                  onHandleColor={(val) =>
                    onHandleProperties(val, "struct-" + border, 2)
                  }
                  onHandleBorderChange={(val) =>
                    onHandleProperties(val, "struct-" + border, 1)
                  }
                  properties={{
                    color: activeContent[camelCase(border)].split(" ")[2],
                    text: activeContent[camelCase(border)].split(" ")[2],
                    border: activeContent[camelCase(border)],
                  }}
                />
              </div>
            );
          })}
        </div>
        <HorizontalRule />
        <div>
          <Text className="settings__heading" content="Background Image" />
          <div className="u-margin-top-light">
            <Button text="Choose Image" variant="primary" />
          </div>
          <Text
            className="u-margin-top-small small-text-primary"
            content={IMAGE_WARNING}
          />
        </div>
        <HorizontalRule />
        {/* Looping through active columns */}
        <div>
          <Text className="settings__heading" content="Column's properties" />
          <div className="settings__types u-margin-top-small">
            {activeContent.columns.map((type, idx) => (
              <span key={idx}>
                <Button
                  onHandleClick={() => onHandleColumnChange(idx + 1)}
                  text={`Column ${idx + 1}`}
                  variant={`${
                    structure.selectedColumn === idx + 1
                      ? "tertiary"
                      : "tertiary--disabled"
                  }`}
                />
              </span>
            ))}
          </div>
        </div>
        <div className="row u-margin-top-small u-margin-bottom-none">
          <div className="col-1-of-2">
            <Text content="Background Color" />
            <div className="u-margin-top-light">
              <Paper
                onHandleColor={(val) =>
                  onHandleProperties(val, "columnBackground", selectedColumn)
                }
                properties={{
                  color: activeContent.columns[selectedColumn - 1].background,
                  text: activeContent.columns[selectedColumn - 1].background,
                }}
              />
            </div>
          </div>
          <div className="col-1-of-2">
            <div>
              <Text content="Border Radius" />
            </div>
            <div className="u-margin-top-light">
              <Knob
                onHandleClick={(val) =>
                  onHandleProperties(val, "columnRadius", selectedColumn)
                }
                content={activeContent.columns[selectedColumn - 1].borderRadius}
              />
            </div>
          </div>
        </div>
        <HorizontalRule />
        <MarginSet
          {...activeContent.columns[selectedColumn - 1]}
          onHandleMarginSet={(val, prop) =>
            onHandleProperties(val, `column-margin-${prop}`, selectedColumn)
          }
        />
        <div className="row u-margin-bottom-none u-margin-top-small">
          <div className="col-1-of-3">&nbsp;</div>
          <div className="col-2-of-3">
            <div className="u-display-flex-between">
              <Text content="Independent borders" />
              <Slider />
            </div>
          </div>
        </div>
        <div>
          {BORDER_TYPES.map((border, idx) => (
            <div key={idx}>
              <Text
                className="u-margin-top-light"
                content={border
                  .split("-")
                  .map((b) => textCapitalize(b))
                  .join(" ")}
              />
              <Paper
                onHandleColor={(val) =>
                  onHandleBorder(
                    val,
                    "color",
                    border.split("-")[border.split.length - 1]
                  )
                }
                properties={{
                  color: activeContent.columns[selectedColumn - 1][
                    camelCase(border)
                  ].split(" ")[2],
                  text: activeContent.columns[selectedColumn - 1][
                    camelCase(border)
                  ].split(" ")[2],
                  border:
                    structure[
                      border
                        .split("-")
                        .map((b, idx) => (idx > 0 ? textCapitalize(b) : b))
                        .join("")
                    ],
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StructureSettings;
