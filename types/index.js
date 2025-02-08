export default class Types {
    static getJobTypes() {
        const jobTypes = {
            EMAIL: 'EMAIL',
            NOTIFICATION: 'NOTIFICATION',
            DATA_PROCESSING: 'DATA_PROCESSING',
            REPORT_GENERATION: 'REPORT',
            BACKUP: 'BACKUP'
        }
        return jobTypes
    }
    static getWorkerTypes() {
        const workerTypes = {
            SCHEDULER : 'SCHEDULER',
            EXECUTOR : 'EXECUTOR'
        }
        return workerTypes
    }
    static getWorkerStatus() {
        const workerStatus = {
            IDLE : 'IDLE',
            BUSY : 'BUSY',
            DOWN : 'DOWN'
        }
        return workerStatus
    }

}