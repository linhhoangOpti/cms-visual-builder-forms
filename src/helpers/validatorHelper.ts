export const isRequiredValidator = (validators: any) => {
    return validators?.some((v: { type: string }) => v.type === "requirevalidator")
}