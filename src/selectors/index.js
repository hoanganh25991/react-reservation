export const getOutlet = state => {
  let { outlet_id, allowed_outlets } = state

  return allowed_outlets.filter(allowed_outlet => allowed_outlet.id === outlet_id)[0]
}
