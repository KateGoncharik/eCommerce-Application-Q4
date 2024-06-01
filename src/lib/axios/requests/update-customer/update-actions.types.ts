export type ChangeEmail = {
  action: 'changeEmail';
  email: string;
};

export type ChangeFirstName = {
  action: 'setFirstName';
  firstName: string;
};

export type ChangeLastName = {
  action: 'setLastName';
  lastName: string;
};

export type ChangeDateOfBirth = {
  action: 'setDateOfBirth';
  dateOfBirth: string;
};

export type Action = ChangeDateOfBirth | ChangeEmail | ChangeFirstName | ChangeLastName;
