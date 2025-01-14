import { Instance } from "@webstudio-is/react-sdk";

export const getInstancePath = (
  instance: Instance,
  instanceId: Instance["id"]
) => {
  const path = [];

  const find = (instance: Instance) => {
    if (instance.id === instanceId) return true;
    for (const child of instance.children) {
      if (typeof child === "string") continue;
      const found = find(child);
      if (found) {
        path.push(child);
        return true;
      }
    }
  };

  if (find(instance)) {
    path.push(instance);
  }

  return path.reverse();
};

export const getInstancePathWithPositions = (
  instance: Instance,
  instanceId: Instance["id"]
) => {
  const path = [];

  const find = (instance: Instance) => {
    if (instance.id === instanceId) return true;
    for (let i = 0; i < instance.children.length; i++) {
      const child = instance.children[i];
      if (typeof child === "string") continue;
      const found = find(child);
      if (found) {
        path.push({ instance: child, position: i });
        return true;
      }
    }
  };

  if (find(instance)) {
    path.push({ instance, position: 0 });
  }

  return path.reverse();
};
