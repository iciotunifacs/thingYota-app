export const mockActorsForTarget = (actors) => {
  return actors.map((actor, key) => {
    let newActor = {
      ...actor,
      key: actor._id.toString(),
      title: actor.name,
      type: "Actor"
    }

    if (actor.device_parent && actor.device_parent.name) {
      newActor.description = actor.device_parent.name
    }

    return newActor
  })
}
