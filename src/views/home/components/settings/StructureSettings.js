import React from "react";

import { setSelected } from "../../../../actions/options.action";
import {
  changePadding,
  modifyColumnStructure,
  setIndependentBorder,
  setMobileStack,
  setSelectedColumn,
} from "../../../../actions/structure.action";
import Button from "../../../../components/atoms/Button";
import HorizontalRule from "../../../../components/atoms/HorizontalRule";
import Text from "../../../../components/atoms/Text";
import Paper from "../../../../components/molecules/Paper";
import Slider from "../../../../components/molecules/Slider";
import Knob from "../../../../components/organisms/Knob";
import LeftArrow from "../../../../utils/icons/LeftArrow";
import { BORDER_TYPES, COLUMN_TYPES, IMAGE_WARNING } from "../../data";

const StructureSettings = ({ type, structure, settings, dispatch }) => {
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

  const onChangeVerticalPadding = (status) => dispatch(changePadding(status));

  const onSliderChange = (type) => {
    switch (type) {
      case "BORDER":
        dispatch(setIndependentBorder());
        break;
      case "STACK":
        dispatch(setMobileStack());
    }
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
            <Knob onHandleClick={onChangeColumn} content={structure.columns} />
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
                  content={`${structure.verticalPadding}px`}
                />
              </div>
            </div>
            <div className="col-1-of-2">
              <div>
                <Text content="Background Color" />
              </div>
              <div className="u-margin-top-light">
                <Paper
                  properties={{
                    color: structure.backgroundColor,
                    text: structure.backgroundColor,
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
          {BORDER_TYPES.map((border, idx) => (
            <div key={idx}>
              <Text
                className="u-margin-top-light"
                content={border
                  .split("-")
                  .map((b) => b[0].toUpperCase() + b.substring(1))
                  .join(" ")}
              />
              <Paper
                properties={{
                  color: structure.backgroundColor,
                  text: structure.backgroundColor,
                  border:
                    structure[
                      border
                        .split("-")
                        .map((b, idx) => {
                          return idx > 0
                            ? b[0].toUpperCase() + b.substring(1)
                            : b;
                        })
                        .join("")
                    ],
                }}
              />
            </div>
          ))}
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
        <div>
          <Text className="settings__heading" content="Column's properties" />
          <div className="settings__types u-margin-top-small">
            {COLUMN_TYPES.map((type, idx) => (
              <span key={idx}>
                <Button
                  onHandleClick={() => onHandleColumnChange(idx + 1)}
                  text={type}
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
            <div>
              <Text content="Background Color" />
            </div>
            <div className="u-margin-top-light">
              <Paper
                properties={{
                  color: structure.backgroundColor,
                  text: structure.backgroundColor,
                }}
              />
            </div>
          </div>
          <div className="col-1-of-2">
            <div>
              <Text content="Border Radius" />
            </div>
            <div className="u-margin-top-light">
              <Knob />
            </div>
          </div>
        </div>
        <HorizontalRule />
        <div className="row u-margin-bottom-none">
          <div className="col-1-of-2">
            <div>
              <Text content="Margin Top" />
            </div>
            <div className="u-margin-top-light">
              <Knob />
            </div>
          </div>
          <div className="col-1-of-2">
            <div>
              <Text content="Margin Bottom" />
            </div>
            <div className="u-margin-top-light">
              <Knob />
            </div>
          </div>
        </div>
        <div className="row u-margin-bottom-none u-margin-top-light">
          <div className="col-1-of-2">
            <div>
              <Text content="Margin Top" />
            </div>
            <div className="u-margin-top-light">
              <Knob />
            </div>
          </div>
          <div className="col-1-of-2">
            <div>
              <Text content="Margin Bottom" />
            </div>
            <div className="u-margin-top-light">
              <Knob />
            </div>
          </div>
        </div>
        <div className="row u-margin-bottom-none u-margin-top-light">
          <div className="col-1-of-3">&nbsp;</div>
          <div className="col-2-of-3">
            <div className="u-display-flex-between">
              <span>
                <Text content="Independent borders" />
              </span>
              <span>
                <Slider />
              </span>
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
                  .map((b) => b[0].toUpperCase() + b.substring(1))
                  .join(" ")}
              />
              <Paper
                properties={{
                  color: structure.backgroundColor,
                  text: structure.backgroundColor,
                  border:
                    structure[
                      border
                        .split("-")
                        .map((b, idx) => {
                          return idx > 0
                            ? b[0].toUpperCase() + b.substring(1)
                            : b;
                        })
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
