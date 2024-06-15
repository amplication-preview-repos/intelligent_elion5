import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="orderDate" source="orderDate" />
        <NumberInput label="totalAmount" source="totalAmount" />
      </SimpleForm>
    </Edit>
  );
};
