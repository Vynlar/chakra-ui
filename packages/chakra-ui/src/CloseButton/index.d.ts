import * as React from "react";
import { PseudoBoxProps } from "../PseudoBox";

interface ICloseButton {
  /**
   * The size of the close button
   */
  size?: "lg" | "md" | "sm";
  /**
   * If `true`, the close button will be disabled
   */
  isDisabled?: boolean;
  /**
   * The color of the close icon
   */
  color?: string;
  /**
   * An accessible label for the close button
   */
  "aria-label"?: string;
}

export type CloseButtonProps = ICloseButton & PseudoBoxProps;

declare const CloseButton: React.FC<CloseButtonProps>;

export default CloseButton;
