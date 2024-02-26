import styled from "styled-components";

import {
    Checkbox as RawCheckBox,
    Select as RawSelect
} from "@profabric/react-components"

export const Checkbox = styled(RawCheckBox)`
    --pf-display: block;
`;
export const Select = styled(RawSelect)`
  --pf-width: 100%;
  --pf-display: block;
`;
