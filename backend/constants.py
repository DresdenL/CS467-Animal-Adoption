CREATE_ORGANIZATION_REQUEST_PARAMS = [
    "organizationName",
    "email",
    "password",
    "addressLine1",
    "addressLine2",
    "city",
    "state",
    "zip",
    "userName",
    "phoneNumber"
]

CREATE_ANIMAL_REQUEST_PARAMS = [
    "name",
    "availability",
    "spayedNeutered",
    "isActive",
    "organizationId",
    "gender",
    "breed",
    "species",
    "dispositions",
    "age",
]

GET_ANIMAL_REQUEST_PARAMS = [
    "organization_id",
    "animal_id"
]