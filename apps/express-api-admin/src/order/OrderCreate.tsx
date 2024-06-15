import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="orderDate" source="orderDate" />
        <NumberInput label="totalAmount" source="totalAmount" />
      </SimpleForm>
    </Create>
  );
};
