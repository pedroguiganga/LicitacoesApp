let processes = [];

export const getProcesses = async () => processes;

export const addProcess = async (process) => {
  process.id = processes.length + 1;
  processes.push(process);
};
