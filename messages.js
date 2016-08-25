// See http://momentjs.com/docs/#/use-it/browserify/
import 'moment/locale/he'

import reactIntlData from 'react-intl/locale-data/he'
import { addLocaleData } from 'react-intl'
addLocaleData(reactIntlData)

// ===================================================================

export default {
  // Original text: "OK"
  ok: 'אישור',

  // Original text: "Cancel"
  cancel: 'ביטול',

  // Original text: "Long click to edit"
  editableLongClickPlaceholder: 'לחיצה ארוכה לעריכה',

  // Original text: "Click to edit"
  editableClickPlaceholder: 'לחץ לעריכה',

  // Original text: "Home"
  homePage: 'בית',

  // Original text: "Dashboard"
  dashboardPage: 'פאנל ראשי',

  // Original text: "Overview"
  overviewDashboardPage: 'מבט כללי',

  // Original text: "Visualizations"
  overviewVisualizationDashboardPage: 'ויזואליזציה',

  // Original text: "Statistics"
  overviewStatsDashboardPage: 'סטטיסטיקה',

  // Original text: "Health"
  overviewHealthDashboardPage: 'מצב כללי',

  // Original text: "Self service"
  selfServicePage: 'שירות עצמי',

  // Original text: "Dashboard"
  selfServiceDashboardPage: 'פאנל ראשי',

  // Original text: "Administration"
  selfServiceAdminPage: 'ניהול',

  // Original text: "Backup"
  backupPage: 'גיבוי',

  // Original text: "Jobs"
  jobsPage: 'משימות',

  // Original text: "Updates"
  updatePage: 'עדכונים',

  // Original text: "Settings"
  settingsPage: 'הגדרות',

  // Original text: "Servers"
  settingsServersPage: 'מכונות',

  // Original text: "Users"
  settingsUsersPage: 'משתמשים',

  // Original text: "Groups"
  settingsGroupsPage: 'קבוצות',

  // Original text: "ACLs"
  settingsAclsPage: 'סוגי גישה',

  // Original text: "Plugins"
  settingsPluginsPage: 'פלאגינים',

  // Original text: "About"
  aboutPage: 'אודות',

  // Original text: "New"
  newMenu: 'חדש',

  // Original text: "Tasks"
  taskMenu: 'משימות',

  // Original text: "VM"
  newVmPage: 'מכונה וירטאלית',

  // Original text: "Storage"
  newSrPage: 'אחסון',

  // Original text: "Server"
  newServerPage: 'מכונה',

  // Original text: "Import"
  newImport: 'ייבוא',

  // Original text: "Overview"
  backupOverviewPage: 'הרחבה',

  // Original text: "New"
  backupNewPage: 'חדש',

  // Original text: "Remotes"
  backupRemotesPage: 'חיבורים מרחוק',

  // Original text: "Restore"
  backupRestorePage: 'שחזור',

  // Original text: "Schedule"
  schedule: 'תזמון',

  // Original text: "New VM backup"
  newVmBackup: 'גיבוי חדש למכונה וירטואלית',

  // Original text: "Edit VM backup"
  editVmBackup: 'ערוך הגדרות גיבוי למכונה וירטואלית',

  // Original text: "Backup"
  backup: 'גיבוי',

  // Original text: "Rolling Snapshot"
  rollingSnapshot: 'גיבוי סנאפשוט',

  // Original text: "Delta Backup"
  deltaBackup: 'גיבוי דלטא',

  // Original text: "Disaster Recovery"
  disasterRecovery: 'שחזור מ-DR',

  // Original text: "Continuous Replication"
  continuousReplication: 'רפליקציה רציפה',

  // Original text: "Overview"
  jobsOverviewPage: 'מבט כללי',

  // Original text: "New"
  jobsNewPage: 'משימה חדשה',

  // Original text: "Scheduling"
  jobsSchedulingPage: 'תזמון משימות',

  // Original text: "Custom Job"
  customJob: 'משימה מותאמת אישית',

  // Original text: "EN"
  enLang: 'אנגלית',

  // Original text: "FR"
  frLang: 'צרפתית',

  // Original text: "Username:"
  usernameLabel: 'שם משתמש',

  // Original text: "Password:"
  passwordLabel: 'סיסמה',

  // Original text: "Sign in"
  signInButton: 'כניסה',

  // Original text: "Sign out"
  signOut: 'יציאה',

  // Original text: "Fetching data…"
  homeFetchingData: 'מקבל נתונים, נא להמתין...',

  // Original text: "Welcome on Xen Orchestra!"
  homeWelcome: 'ברוכים הבאים',

  // Original text: "Add your XenServer hosts or pools"
  homeWelcomeText: 'הוסף שרת בודד או קבוצת שרתים',

  // Original text: "Want some help?"
  homeHelp: 'צריך עזרה?',

  // Original text: "Add server"
  homeAddServer: 'הוסף מכונה',

  // Original text: "Online Doc"
  homeOnlineDoc: 'דוקומנטציה',

  // Original text: "Pro Support"
  homeProSupport: 'תמיכה מקצועית',

  // Original text: "There are no VMs!"
  homeNoVms: 'אין מכונות וירטואליות',

  // Original text: "Or…"
  homeNoVmsOr: 'או...',

  // Original text: "Import VM"
  homeImportVm: 'ייבוא מכונה וירטואלית',

  // Original text: "Import an existing VM in xva format"
  homeImportVmMessage: 'ייבוא מכונה וירטואלית חדשה בפורמת XVA',

  // Original text: "Restore a backup"
  homeRestoreBackup: 'שחזור מגיבוי',

  // Original text: "Restore a backup from a remote store"
  homeRestoreBackupMessage: 'שחזור גיבוי ממקום אחסון מרוחק',

  // Original text: "This will create a new VM"
  homeNewVmMessage: 'זה ייצור מכונה וירטואלית חדשה',

  // Original text: "Filters"
  homeFilters: 'מסננים',

  // Original text: "Pool"
  homeTypePool: 'משאבים',

  // Original text: "Host"
  homeTypeHost: 'שרת',

  // Original text: "VM"
  homeTypeVm: 'מכונה וירטואלית',

  // Original text: "SR"
  homeTypeSr: 'SR',

  // Original text: "VDI"
  homeTypeVdi: 'VDI',

  // Original text: "Sort"
  homeSort: 'מיון',

  // Original text: "Pools"
  homeAllPools: 'משאבים',

  // Original text: "Hosts"
  homeAllHosts: 'מכונות',

  // Original text: "Tags"
  homeAllTags: 'מילות מפתח',

  // Original text: "New VM"
  homeNewVm: 'מכונה וירטואלית חדשה',

  // Original text: "Running hosts"
  homeFilterRunningHosts: 'שרתים פעילים',

  // Original text: "Disabled hosts"
  homeFilterDisabledHosts: 'שרתים לא פעילים',

  // Original text: "Running VMs"
  homeFilterRunningVms: 'מכונות וירטואליות פעילות',

  // Original text: "Non running VMs"
  homeFilterNonRunningVms: 'מכונות ויטואליות לא פעילות',

  // Original text: "Pending VMs"
  homeFilterPendingVms: 'מכונות וירטואליות במצב המתנה',

  // Original text: "HVM guests"
  homeFilterHvmGuests: 'HVM guests',

  // Original text: "Tags"
  homeFilterTags: 'מילות מפתח',

  // Original text: "Sort by"
  homeSortBy: 'סנן לפי',

  // Original text: "Name"
  homeSortByName: 'שם',

  // Original text: "Power state"
  homeSortByPowerstate: 'מצב המכונה',

  // Original text: "RAM"
  homeSortByRAM: 'זכרון RAM',

  // Original text: "vCPUs"
  homeSortByvCPUs: 'vCPUs',

  // Original text: "{displayed, number}x {icon} (on {total, number})"
  homeDisplayedItems: undefined,

  // Original text: "{selected, number}x {icon} selected (on {total, number})"
  homeSelectedItems: undefined,

  // Original text: "More"
  homeMore: 'עוד',

  // Original text: "Migrate to…"
  homeMigrateTo: 'בצע מיגרציה אל...',

  // Original text: "Add"
  add: 'הוסף',

  // Original text: "Remove"
  remove: 'הסר',

  // Original text: "Aperçu"
  preview: undefined,

  // Original text: "Item"
  item: 'פריט',

  // Original text: "No selected value"
  noSelectedValue: 'לא נבחר שום ערך',

  // Original text: "Choose user(s) and/or group(s)"
  selectSubjects: 'בחר משתמש(ים) או קבוצה(ות) להוספה',

  // Original text: "Select Object(s)…"
  selectObjects: 'בחר פריט(ים)',

  // Original text: "Choose a role"
  selectRole: 'בחר תפקיד(ים)',

  // Original text: "Select Host(s)…"
  selectHosts: 'בחר שרת(ים)',

  // Original text: "Select object(s)…"
  selectHostsVms: 'בחר פריט(ים)',

  // Original text: "Select Network(s)…"
  selectNetworks: 'בחר רשת(ות)',

  // Original text: "Select PIF(s)…"
  selectPifs: 'בחר PIF',

  // Original text: "Select Pool(s)…"
  selectPools: 'בחר משאבים',

  // Original text: "Select Remote(s)…"
  selectRemotes: 'בחר חיבורים מרחוק',

  // Original text: "Select SR(s)…"
  selectSrs: 'בחר SR',

  // Original text: "Select VM(s)…"
  selectVms: 'בחר מכונות וירטואליות',

  // Original text: "Select VM template(s)…"
  selectVmTemplates: 'בחר תבנית של מכונה וירטואלית',

  // Original text: "Select tag(s)…"
  selectTags: 'בחר מילת מפתח',

  // Original text: "Select disk(s)…"
  selectVdis: 'בחר דיסקים',

  // Original text: "Fill required informations."
  fillRequiredInformations: 'נא למלא את המידע הדרוש',

  // Original text: "Fill informations (optional)"
  fillOptionalInformations: 'נא למלא מידע(שדה לא חובה)',

  // Original text: "Reset"
  selectTableReset: 'אתחול',

  // Original text: "Month"
  schedulingMonth: 'חודש',

  // Original text: "Every month"
  schedulingEveryMonth: 'כל חודש',

  // Original text: "Each selected month"
  schedulingEachSelectedMonth: 'כל חודש נבחר',

  // Original text: "Day of the month"
  schedulingMonthDay: 'יום בחודש',

  // Original text: "Every day"
  schedulingEveryMonthDay: 'כל יום',

  // Original text: "Each selected day"
  schedulingEachSelectedMonthDay: 'כל יום נבחר',

  // Original text: "Day of the week"
  schedulingWeekDay: 'יום בשבוע',

  // Original text: "Every day"
  schedulingEveryWeekDay: 'כל יום',

  // Original text: "Each selected day"
  schedulingEachSelectedWeekDay: 'כל יום נבחר',

  // Original text: "Hour"
  schedulingHour: 'שעה',

  // Original text: "Every hour"
  schedulingEveryHour: 'כל שעה',

  // Original text: "Every N hour"
  schedulingEveryNHour: 'כל X ימים',

  // Original text: "Each selected hour"
  schedulingEachSelectedHour: 'כל שעה שנבחרה',

  // Original text: "Minute"
  schedulingMinute: 'דקה',

  // Original text: "Every minute"
  schedulingEveryMinute: 'כל דקה',

  // Original text: "Every N minute"
  schedulingEveryNMinute: 'כל X דקות',

  // Original text: "Each selected minute"
  schedulingEachSelectedMinute: 'כל דקה שנבחרה',

  // Original text: "Reset"
  schedulingReset: 'אתחול',

  // Original text: "Unknown"
  unknownSchedule: 'לא יודע',

  // Original text: "Job"
  job: 'משימה',

  // Original text: "Job ID"
  jobId: 'מספר מזהה של משימה',

  // Original text: "Name"
  jobName: 'שם',

  // Original text: "Start"
  jobStart: 'התחל',

  // Original text: "End"
  jobEnd: 'סיים',

  // Original text: "Duration"
  jobDuration: 'משך',

  // Original text: "Status"
  jobStatus: 'סטטוס',

  // Original text: "Action"
  jobAction: 'פעולה',

  // Original text: "Tag"
  jobTag: 'מילת מפתח',

  // Original text: "Scheduling"
  jobScheduling: 'תזמון',

  // Original text: "State"
  jobState: 'מצב',

  // Original text: "Run job"
  runJob: 'הרץ משימה',

  // Original text: "One shot running started. See overview for logs."
  runJobVerbose: undefined,

  // Original text: "Started"
  jobStarted: 'התחיל',

  // Original text: "Finished"
  jobFinished: 'סיים',

  // Original text: "Save"
  saveBackupJob: 'שמור',

  // Original text: "Remove backup job"
  deleteBackupSchedule: 'הסר משימת גיבוי',

  // Original text: "Are you sure you want to delete this backup job?"
  deleteBackupScheduleQuestion: 'האם אתה בטוח שברצונך למחוק את משימת הגיבוי הנוכחית?',

  // Original text: "Enable immediately after creation"
  scheduleEnableAfterCreation: 'הפעל מייד לאחר יצירה',

  // Original text: "You are editing Schedule {name} ({id}). Saving will override previous schedule state."
  scheduleEditMessage: undefined,

  // Original text: "You are editing job {name} ({id}). Saving will override previous job state."
  jobEditMessage: undefined,

  // Original text: "No scheduled jobs."
  noScheduledJobs: 'אין משימות מתוזמנות',

  // Original text: "No jobs found."
  noJobs: 'לא נמצאו משימות',

  // Original text: "No schedules found"
  noSchedules: 'לא נמצאו תזמונים',

  // Original text: "Select a xo-server API command"
  jobActionPlaceHolder: 'בחר פקודת API של שרת ה-XO',

  // Original text: "Select your backup type:"
  newBackupSelection: 'בחר את סוג הגיבוי',

  // Original text: "Remote stores for backup"
  remoteList: 'מיקום אחסון מרוחק לגיבוי',

  // Original text: "New File System Remote"
  newRemote: 'קובץ חדש של גישה מרחוק',

  // Original text: "Local"
  remoteTypeLocal: 'מקומי',

  // Original text: "NFS"
  remoteTypeNfs: 'NFS',

  // Original text: "SMB"
  remoteTypeSmb: 'SMB',

  // Original text: "Type"
  remoteType: 'סוג',

  // Original text: "General"
  newSrGeneral: 'כללי',

  // Original text: "Select Strorage Type:"
  newSrTypeSelection: 'בחר סוג מקום אחסון',

  // Original text: "Settings"
  newSrSettings: 'הגדרות',

  // Original text: "Storage Usage"
  newSrUsage: 'שימוש מקום אחסון',

  // Original text: "Summary"
  newSrSummary: 'סיכום',

  // Original text: "Host"
  newSrHost: 'שרת',

  // Original text: "Type"
  newSrType: 'סוג',

  // Original text: "Name"
  newSrName: 'שם',

  // Original text: "Description"
  newSrDescription: 'תיאור',

  // Original text: "Server"
  newSrServer: 'מכונה',

  // Original text: "Path"
  newSrPath: 'נתיב',

  // Original text: "IQN"
  newSrIqn: 'IQN',

  // Original text: "LUN"
  newSrLun: 'LUN',

  // Original text: "with auth."
  newSrAuth: 'עם אימות',

  // Original text: "User Name"
  newSrUsername: 'שם משתמש',

  // Original text: "Password"
  newSrPassword: 'סיסמה',

  // Original text: "Device"
  newSrDevice: 'התקן',

  // Original text: "in use"
  newSrInUse: 'בשימוש',

  // Original text: "Size"
  newSrSize: 'גודל',

  // Original text: "Create"
  newSrCreate: 'יצירה',

  // Original text: "Users/Groups"
  subjectName: 'משתמשים\קבוצות',

  // Original text: "Object"
  objectName: 'אובייקט',

  // Original text: "Role"
  roleName: 'תפקיד',

  // Original text: "New Group Name"
  newGroupName: 'שם קבוצה חדש',

  // Original text: "Create Group"
  createGroup: 'צור קבוצה חדשה',

  // Original text: "Create"
  createGroupButton: 'יצירה',

  // Original text: "Delete Group"
  deleteGroup: 'מחק קבוצה',

  // Original text: "Are you sure you want to delete this group?"
  deleteGroupConfirm: 'האם אתה בטוח שברצונך למחוק את הקבוצה?',

  // Original text: "Delete User"
  deleteUSer: 'מחק משתמש',

  // Original text: "Remove user from Group"
  removeUserFromGroup: 'מחק משתמש מהקבוצה',

  // Original text: "Are you sure you want to delete this user?"
  deleteUserConfirm: 'האם אתה בטוח שברצונך למחוק את המשתמש הנבחר?',

  // Original text: "unknown user"
  unknownUser: 'משתמש לא ידוע',

  // Original text: "No group found"
  noGroupFound: 'לא נמצאה שום קבוצה',

  // Original text: "Name"
  groupNameColumn: 'שם',

  // Original text: "Users"
  groupUsersColumn: 'משתמשים',

  // Original text: "Add User"
  addUserToGroupColumn: 'הוסף משתמש',

  // Original text: "Email"
  userNameColumn: 'מייל',

  // Original text: "Permissions"
  userPermissionColumn: 'הרשאות',

  // Original text: "Password"
  userPasswordColumn: 'סיסמה',

  // Original text: "Email"
  userName: 'שם משתמש',

  // Original text: "Password"
  userPassword: 'סיסמה',

  // Original text: "Create"
  createUserButton: 'יצירה',

  // Original text: "No user found"
  noUserFound: 'משתמש לא נמצא',

  // Original text: "User"
  userLabel: 'משתמש',

  // Original text: "Admin"
  adminLabel: 'מנהל',

  // Original text: "No user in group"
  noUserInGroup: 'אין משתמש בקבוצה',

  // Original text: "{users} user{users, plural, one {} other {s}}"
  countUsers: undefined,

  // Original text: "Select Permission"
  selectPermission: 'בחר הרשאה',

  // Original text: "Auto-load at server start"
  autoloadPlugin: 'העלאה אוטומטית בזמן עליית המכונה',

  // Original text: "Save configuration"
  savePluginConfiguration: 'שמור הגדרות',

  // Original text: "Delete configuration"
  deletePluginConfiguration: 'מחק הגדרות',

  // Original text: "Plugin error"
  pluginError: 'שגיאת פלאגין',

  // Original text: "Unknown error"
  unknownPluginError: 'שגיאה לא ידועה',

  // Original text: "Purge plugin configuration"
  purgePluginConfiguration: 'ניקוי הגדרת הפלאגין',

  // Original text: "Are you sure you want to purge this configuration ?"
  purgePluginConfigurationQuestion: 'האם אתה בטוח שברצונך לנקות את ההגדרה של פלאגין זה?',

  // Original text: "Edit"
  editPluginConfiguration: 'ערוך',

  // Original text: "Cancel"
  cancelPluginEdition: 'בטל',

  // Original text: "Plugin configuration"
  pluginConfigurationSuccess: 'הגדרת פלאגין',

  // Original text: "Plugin configuration successfully saved!"
  pluginConfigurationChanges: 'הגדרת הפלאגין הושלמה בהצלחה',

  // Original text: "Start"
  startVmLabel: 'הפעל מכונה',

  // Original text: "Recovery start"
  recoveryModeLabel: 'התחל התאוששות המכונה',

  // Original text: "Suspend"
  suspendVmLabel: 'הקפא מכונה',

  // Original text: "Stop"
  stopVmLabel: 'עצור מכונה',

  // Original text: "Force shutdown"
  forceShutdownVmLabel: 'עצירה מאולצת',

  // Original text: "Reboot"
  rebootVmLabel: 'הפעלה מחדש',

  // Original text: "Force reboot"
  forceRebootVmLabel: 'הפעלה מחדש מאולצת',

  // Original text: "Delete"
  deleteVmLabel: 'מחיקה',

  // Original text: "Migrate"
  migrateVmLabel: 'מיגרציה',

  // Original text: "Snapshot"
  snapshotVmLabel: 'סנאפשוט',

  // Original text: "Export"
  exportVmLabel: 'ייצוא',

  // Original text: "Resume"
  resumeVmLabel: 'חזרה',

  // Original text: "Copy"
  copyVmLabel: 'העתק',

  // Original text: "Clone"
  cloneVmLabel: 'שכפל',

  // Original text: "Fast clone"
  fastCloneVmLabel: 'שיכפול מהיר',

  // Original text: "Convert to template"
  convertVmToTemplateLabel: 'המר לתבנית',

  // Original text: "Console"
  vmConsoleLabel: 'קונסול',

  // Original text: "Rescan all disks"
  srRescan: 'סרוק את כל הדיסקים',

  // Original text: "Connect to all hosts"
  srReconnectAll: 'התחבר לכל השרתים',

  // Original text: "Disconnect to all hosts"
  srDisconnectAll: 'התנתק מכל השרתים',

  // Original text: "Forget this SR"
  srForget: 'שכח את ה-SR',

  // Original text: "Remove this SR"
  srRemoveButton: 'הסר את ה-SR',

  // Original text: "No VDIs in this storage"
  srNoVdis: 'אין VDI בשרת זה',

  // Original text: "Hosts"
  hostsTabName: 'שרתים',

  // Original text: "High Availability"
  poolHaStatus: 'זמינות גבוהה',

  // Original text: "Enabled"
  poolHaEnabled: 'פעיל',

  // Original text: "Disabled"
  poolHaDisabled: 'לא פעיל',

  // Original text: "Name"
  hostNameLabel: 'שם',

  // Original text: "Description"
  hostDescription: 'תיאור',

  // Original text: "Memory"
  hostMemory: 'זיכרון',

  // Original text: "No hosts"
  noHost: 'אין שרתים',

  // Original text: "Name"
  poolNetworkNameLabel: 'שם',

  // Original text: "Description"
  poolNetworkDescription: 'תיאור',

  // Original text: "PIFs"
  poolNetworkPif: 'PIFs',

  // Original text: "No networks"
  poolNoNetwork: 'אין רשתות',

  // Original text: "MTU"
  poolNetworkMTU: 'MTU',

  // Original text: "Connected"
  poolNetworkPifAttached: 'מחובר',

  // Original text: "Disconnected"
  poolNetworkPifDetached: 'מנותק',

  // Original text: "Add SR"
  addSrLabel: 'הוסף SR',

  // Original text: "Add VM"
  addVmLabel: 'הוסף מכונה וירטואלית',

  // Original text: "Add Host"
  addHostLabel: 'הוסף שרת',

  // Original text: "Disconnect"
  disconnectServer: 'התנתק',

  // Original text: "Start"
  startHostLabel: 'התחל',

  // Original text: "Stop"
  stopHostLabel: 'הפסק',

  // Original text: "Enable"
  enableHostLabel: 'אפשר',

  // Original text: "Disable"
  disableHostLabel: 'בטל',

  // Original text: "Restart toolstack"
  restartHostAgent: 'הפעל את ה-toolstack מחדש',

  // Original text: "Force reboot"
  forceRebootHostLabel: 'אתחול מאולץ',

  // Original text: "Reboot"
  rebootHostLabel: 'אתחול',

  // Original text: "Emergency mode"
  emergencyModeLabel: 'מצב חירום',

  // Original text: "Storage"
  storageTabName: 'מערכת אחסון',

  // Original text: "Patches"
  patchesTabName: 'Patches',

  // Original text: "Load average"
  statLoad: 'תעינה ממוצעת',

  // Original text: "Hardware"
  hardwareHostSettingsLabel: 'חומרה',

  // Original text: "Address"
  hostAddress: 'כתובת',

  // Original text: "Status"
  hostStatus: 'סטטוס',

  // Original text: "Build number"
  hostBuildNumber: 'מספר ייצור',

  // Original text: "iSCSI name"
  hostIscsiName: 'שם iSCSI',

  // Original text: "Version"
  hostXenServerVersion: 'גרסה',

  // Original text: "Enabled"
  hostStatusEnabled: 'פעיל',

  // Original text: "Disabled"
  hostStatusDisabled: 'לא פעיל',

  // Original text: "Power on mode"
  hostPowerOnMode: 'מצב הפעלה',

  // Original text: "Host uptime"
  hostStartedSince: 'זמן פעולת השרת',

  // Original text: "Toolstack uptime"
  hostStackStartedSince: 'זמן עבודת ה-toolstack',

  // Original text: "CPU model"
  hostCpusModel: 'מודל ה-CPU',

  // Original text: "Core (socket)"
  hostCpusNumber: 'מספר ה-CPU',

  // Original text: "Manufacturer info"
  hostManufacturerinfo: 'מידע יצרן',

  // Original text: "BIOS info"
  hostBiosinfo: 'מידע ה-BIOS',

  // Original text: "Licence"
  licenseHostSettingsLabel: 'רישוי',

  // Original text: "Type"
  hostLicenseType: 'סוג',

  // Original text: "Socket"
  hostLicenseSocket: 'Socket',

  // Original text: "Expiry"
  hostLicenseExpiry: 'תפוגה',

  // Original text: "Add a network"
  networkCreateButton: 'הוסף רשת',

  // Original text: "Device"
  pifDeviceLabel: 'התקן',

  // Original text: "Network"
  pifNetworkLabel: 'רשת',

  // Original text: "VLAN"
  pifVlanLabel: 'VLAN',

  // Original text: "Address"
  pifAddressLabel: 'כתובת',

  // Original text: "MAC"
  pifMacLabel: 'כתובת MAC',

  // Original text: "MTU"
  pifMtuLabel: 'MTU',

  // Original text: "Status"
  pifStatusLabel: 'סטטוס',

  // Original text: "Connected"
  pifStatusConnected: 'מחובר',

  // Original text: "Disconnected"
  pifStatusDisconnected: 'מנותק',

  // Original text: "No physical interface detected"
  pifNoInterface: 'לא זוהו ממשקים פיזיים',

  // Original text: "Add a storage"
  addSrDeviceButton: 'הוסף מערכת אחסון',

  // Original text: "Name"
  srNameLabel: 'שם',

  // Original text: "Type"
  srType: 'סוג',

  // Original text: "Status"
  pdbStatus: 'סטטוס',

  // Original text: "Connected"
  pbdStatusConnected: 'מחובר',

  // Original text: "Disconnected"
  pbdStatusDisconnected: 'מנותק',

  // Original text: "Shared"
  srShared: 'משותף',

  // Original text: "Not shared"
  srNotShared: 'לא משותף',

  // Original text: "No storage detected"
  pbdNoSr: 'לא זוהתה מערכת אחסון',

  // Original text: "Name"
  patchNameLabel: 'שם',

  // Original text: "Install all patches"
  patchUpdateButton: 'התקן את כל ה-Patches',

  // Original text: "Description"
  patchDescription: 'תיאור',

  // Original text: "Release date"
  patchApplied: 'תאריך השקה',

  // Original text: "Size"
  patchSize: 'גודל',

  // Original text: "Status"
  patchStatus: 'סטטוס',

  // Original text: "Applied"
  patchStatusApplied: 'הושם',

  // Original text: "Missing patches"
  patchStatusNotApplied: 'Patches חסרים',

  // Original text: "No patch detected"
  patchNothing: 'שום Patch לא זוהה',

  // Original text: "Release date"
  patchReleaseDate: 'תאריך השקה',

  // Original text: "Guidance"
  patchGuidance: 'הכוונה',

  // Original text: "Action"
  patchAction: 'פעולה',

  // Original text: "Downloaded patches"
  hostInstalledPatches: 'Patches שהורדו',

  // Original text: "Missing patches"
  hostMissingPatches: 'Patches שחסרים',

  // Original text: "Host up-to-date!"
  hostUpToDate: 'השרת מעודכן',

  // Original text: "General"
  generalTabName: 'כללי',

  // Original text: "Stats"
  statsTabName: 'סטטיסטיקה',

  // Original text: "Console"
  consoleTabName: 'קונסול',

  // Original text: "Snapshots"
  snapshotsTabName: 'סנאפשוט',

  // Original text: "Logs"
  logsTabName: 'לוגים',

  // Original text: "Advanced"
  advancedTabName: 'מתקדם',

  // Original text: "Network"
  networkTabName: 'רשת',

  // Original text: "Disk{disks, plural, one {} other {s}}"
  disksTabName: undefined,

  // Original text: "halted"
  powerStateHalted: 'כבוי',

  // Original text: "running"
  powerStateRunning: 'פעיל',

  // Original text: "suspended"
  powerStateSuspended: 'מושהה',

  // Original text: "No Xen tools detected"
  vmStatus: 'לא זוהו Xen Tools',

  // Original text: "No IPv4 record"
  vmName: 'אין רשומת IPv4',

  // Original text: "No IP record"
  vmDescription: 'אין רשומת IP',

  // Original text: "Started {ago}"
  vmSettings: undefined,

  // Original text: "Current status:"
  vmCurrentStatus: 'סטטוס נוכחי',

  // Original text: "Not running"
  vmNotRunning: 'לא פעיל',

  // Original text: "No Xen tools detected"
  noToolsDetected: 'לא זוהו Xen Tools',

  // Original text: "No IPv4 record"
  noIpv4Record: 'אין רשומת IPv4',

  // Original text: "No IP record"
  noIpRecord: 'אין רשומת IP',

  // Original text: "Started {ago}"
  started: undefined,

  // Original text: "Paravirtualization (PV)"
  paraVirtualizedMode: undefined,

  // Original text: "Hardware virtualization (HVM)"
  hardwareVirtualizedMode: 'וירטואליזציה של חומרה',

  // Original text: "CPU usage"
  statsCpu: 'ניצול CPU',

  // Original text: "Memory usage"
  statsMemory: 'ניצול זיכרון',

  // Original text: "Network throughput"
  statsNetwork: 'תפוקת הרשת',

  // Original text: "Disk throughput"
  statDisk: 'תפוקת הדיסק',

  // Original text: "Last 10 minutes"
  statLastTenMinutes: '10 דקות אחרונות',

  // Original text: "Last 2 hours"
  statLastTwoHours: 'שעתיים אחרונות',

  // Original text: "Last week"
  statLastWeek: 'שבוע שעבר',

  // Original text: "Last year"
  statLastYear: 'שנה שעברה',

  // Original text: "Copy"
  copyToClipboardLabel: 'העתק',

  // Original text: "Ctrl+Alt+Del"
  ctrlAltDelButtonLabel: 'Ctrl+Alt+Del',

  // Original text: "Tip:"
  tipLabel: 'טיפים',

  // Original text: "non-US keyboard could have issues with console: switch your own layout to US."
  tipConsoleLabel: 'לשפה שהיא לא אנגלית(US) יכולות להיות בעיות עם הקונסול - נא החלף את השפה לאנגלית',

  // Original text: "Action"
  vdiAction: 'פעולה',

  // Original text: "Attach disk"
  vdiAttachDeviceButton: 'חבר דיסק',

  // Original text: "New disk"
  vbdCreateDeviceButton: 'דיסק חדש',

  // Original text: "Boot order"
  vdiBootOrder: 'סדר טעינת המערכת(boot)',

  // Original text: "Name"
  vdiNameLabel: 'שם',

  // Original text: "Description"
  vdiNameDescription: 'תאור',

  // Original text: "Tags"
  vdiTags: 'מילות מפתח',

  // Original text: "Size"
  vdiSize: 'גודל',

  // Original text: "SR"
  vdiSr: 'SR',

  // Original text: "Boot flag"
  vdbBootableStatus: 'דגל טעינת המערכת(boot)',

  // Original text: "Status"
  vdbStatus: 'סטטוס',

  // Original text: "Connected"
  vbdStatusConnected: 'מחובר',

  // Original text: "Disconnected"
  vbdStatusDisconnected: 'מנותק',

  // Original text: "No disks"
  vbdNoVbd: 'אין דיסקים',

  // Original text: "New device"
  vifCreateDeviceButton: 'התקן חדש',

  // Original text: "No interface"
  vifNoInterface: 'אין ממשקים',

  // Original text: "Device"
  vifDeviceLabel: 'התקן',

  // Original text: "MAC address"
  vifMacLabel: 'כתובת MAC',

  // Original text: "MTU"
  vifMtuLabel: 'MTU',

  // Original text: "Network"
  vifNetworkLabel: 'רשת',

  // Original text: "Status"
  vifStatusLabel: 'סטטוס',

  // Original text: "Connected"
  vifStatusConnected: 'מחובר',

  // Original text: "Disconnected"
  vifStatusDisconnected: 'מנותק',

  // Original text: "IP addresses"
  vifIpAddresses: 'כתובות IP',

  // Original text: "No snapshots"
  noSnapshots: 'אין סנאפשוטים',

  // Original text: "New snapshot"
  snapshotCreateButton: 'סנאפשוט חדש',

  // Original text: "Just click on the snapshot button to create one!"
  tipCreateSnapshotLabel: 'לחץ על כפתור הסנאפשוט ליצירתו',

  // Original text: "Creation date"
  snapshotDate: 'תאריכי יצירה',

  // Original text: "Name"
  snapshotName: 'שם',

  // Original text: "Action"
  snapshotAction: 'פעולה',

  // Original text: "Remove all logs"
  logRemoveAll: 'הסר את כל הלוגים',

  // Original text: "No logs so far"
  noLogs: 'אין לוגים',

  // Original text: "Creation date"
  logDate: 'תאריך יצירה',

  // Original text: "Name"
  logName: 'שם',

  // Original text: "Content"
  logContent: 'תוכן',

  // Original text: "Action"
  logAction: 'פעולה',

  // Original text: "Remove"
  vmRemoveButton: 'הסר',

  // Original text: "Convert"
  vmConvertButton: 'המרה',

  // Original text: "Xen settings"
  xenSettingsLabel: 'הגדרות ה-XEN',

  // Original text: "Guest OS"
  guestOsLabel: 'מערכת הפעלה של המכונה',

  // Original text: "Misc"
  miscLabel: 'MISC',

  // Original text: "UUID"
  uuid: 'UUID',

  // Original text: "Virtualization mode"
  virtualizationMode: 'מצב וירטואליזציה',

  // Original text: "CPU weight"
  cpuWeightLabel: 'עומס ה-CPU',

  // Original text: "Default"
  defaultCpuWeight: 'ברירת מחדל',

  // Original text: "PV args"
  pvArgsLabel: 'ארגומנטים של-PV',

  // Original text: "Xen tools status"
  xenToolsStatus: 'סטטוס ה-Xen Tools',

  // Original text: "{status}"
  xenToolsStatusValue: 'סטטוס',

  // Original text: "OS name"
  osName: 'שם מערכת ההפעלה',

  // Original text: "OS kernel"
  osKernel: 'ה-Kernel של מערכת ההפעלה',

  // Original text: "Auto power on"
  autoPowerOn: 'הפעלה אוטומטית',

  // Original text: "HA"
  ha: 'HA',

  // Original text: "Original template"
  originalTemplate: 'תבנית מקורית',

  // Original text: "Unknown"
  unknownOsName: 'לא ידוע',

  // Original text: "Unknown"
  unknownOsKernel: 'לא ידוע',

  // Original text: "Unknown"
  unknownOriginalTemplate: 'לא ידוע',

  // Original text: "VM limits"
  vmLimitsLabel: 'גבולות מערכת ההפעלה',

  // Original text: "CPU limits"
  vmCpuLimitsLabel: 'גבולות ה-CPU',

  // Original text: "Memory limits (min/max)"
  vmMemoryLimitsLabel: 'גבולות זיכרון',

  // Original text: "vCPUs max:"
  vmMaxVcpus: 'מקסימום vCPUs וירטואלי',

  // Original text: "Memory max:"
  vmMaxRam: 'מקסימום זיכרון',

  // Original text: "Long click to add a name"
  vmHomeNamePlaceholder: 'לחיצה ארוכה לעדכון השם',

  // Original text: "Long click to add a description"
  vmHomeDescriptionPlaceholder: 'לחיצה ארוכה להוספת תיאור',

  // Original text: "Click to add a name"
  vmViewNamePlaceholder: 'לחץ כאן להוספת שם',

  // Original text: "Click to add a description"
  vmViewDescriptionPlaceholder: 'לחץ כאן להוספת תיאור',

  // Original text: "Pool{pools, plural, one {} other {s}}"
  poolPanel: undefined,

  // Original text: "Host{hosts, plural, one {} other {s}}"
  hostPanel: undefined,

  // Original text: "VM{vms, plural, one {} other {s}}"
  vmPanel: undefined,

  // Original text: "RAM Usage"
  memoryStatePanel: 'ניצור זיכרון',

  // Original text: "CPUs Usage"
  cpuStatePanel: 'ניצול CPU',

  // Original text: "VMs Power state"
  vmStatePanel: 'מצב פעולה של המכונה',

  // Original text: "Pending tasks"
  taskStatePanel: 'משימות בהמתנה',

  // Original text: "Users"
  usersStatePanel: 'משתמשים',

  // Original text: "Storage state"
  srStatePanel: 'מצב מערכת ההאחסון',

  // Original text: "of"
  ofUsage: 'של',

  // Original text: "No storage"
  noSrs: 'אין מערכת אחסון',

  // Original text: "Name"
  srName: 'שם',

  // Original text: "Pool"
  srPool: 'רשימה',

  // Original text: "Host"
  srHost: 'שרת',

  // Original text: "Type"
  srFormat: 'סוג',

  // Original text: "Size"
  srSize: 'גודל',

  // Original text: "Usage"
  srUsage: 'שימוש',

  // Original text: "used"
  srUsed: 'היה בישמוש',

  // Original text: "free"
  srFree: 'פנוי',

  // Original text: "Storage Usage"
  srUsageStatePanel: 'כמות שימוש של מערכת האחסון',

  // Original text: "Top 5 SR Usage (in %)"
  srTopUsageStatePanel: undefined,

  // Original text: "{value} {date, date, medium}"
  weekHeatmapData: undefined,

  // Original text: "No data."
  weekHeatmapNoData: 'אין נתונים',

  // Original text: "Stats error"
  statsDashboardGenericErrorTitle: 'שגיאה בסטטיסטיקה',

  // Original text: "There is no stats available for:"
  statsDashboardGenericErrorMessage: 'אין נתוני סטטיסטיקה ל...',

  // Original text: "No selected metric"
  noSelectedMetric: 'metric לא נבחר',

  // Original text: "Select"
  statsDashboardSelectObjects: 'בחר',

  // Original text: "Loading…"
  metricsLoading: 'טוען',

  // Original text: "Coming soon!"
  comingSoon: 'בקרוב',

  // Original text: "Orphaned VDIs"
  orphanedVdis: 'VDIs יתומים',

  // Original text: "Orphaned VMs"
  orphanedVms: 'VMs יתומים',

  // Original text: "No orphans"
  noOrphanedObject: 'אין יתומים',

  // Original text: "Remove all orphaned VDIs"
  removeAllOrphanedObject: 'הסר את כל ה-VDIs היתומים',

  // Original text: "Name"
  vmNameLabel: 'שם',

  // Original text: "Description"
  vmNameDescription: 'תיאור',

  // Original text: "Resident on"
  vmContainer: 'שייך אל',

  // Original text: "Alarms"
  alarmMessage: 'תזכורת',

  // Original text: "No alarms"
  noAlarms: 'אין תזכורות',

  // Original text: "Date"
  alarmDate: 'תאריך',

  // Original text: "Content"
  alarmContent: 'תוכן',

  // Original text: "Issue on"
  alarmObject: 'הוגדר על',

  // Original text: "Pool"
  alarmPool: 'רשימה',

  // Original text: "Remove all alarms"
  alarmRemoveAll: 'הסר את כל התזכורות',

  // Original text: "Create a new VM on {pool}"
  newVmCreateNewVmOn: 'צור רשימה חדשה על...',

  // Original text: "Infos"
  newVmInfoPanel: 'מידע',

  // Original text: "Name"
  newVmNameLabel: 'שם',

  // Original text: "Template"
  newVmTemplateLabel: 'תבניות',

  // Original text: "Description"
  newVmDescriptionLabel: 'תיאור',

  // Original text: "Performances"
  newVmPerfPanel: 'ביצועים',

  // Original text: "vCPUs"
  newVmVcpusLabel: 'vCPUs',

  // Original text: "RAM"
  newVmRamLabel: 'זיכרון',

  // Original text: "Install settings"
  newVmInstallSettingsPanel: 'התקן הגדרות',

  // Original text: "ISO/DVD"
  newVmIsoDvdLabel: 'ISO/DVD',

  // Original text: "Network"
  newVmNetworkLabel: 'רשת',

  // Original text: "PV Args"
  newVmPvArgsLabel: 'PV Args',

  // Original text: "PXE"
  newVmPxeLabel: 'PXE',

  // Original text: "Interfaces"
  newVmInterfacesPanel: 'ממשקים',

  // Original text: "MAC"
  newVmMacLabel: 'MAC',

  // Original text: "Add interface"
  newVmAddInterface: 'הוסף ממשק',

  // Original text: "Disks"
  newVmDisksPanel: 'דיסקים',

  // Original text: "SR"
  newVmSrLabel: 'SR',

  // Original text: "Bootable"
  newVmBootableLabel: 'ניתן לטעינה(Bootable)',

  // Original text: "Size"
  newVmSizeLabel: 'גודל',

  // Original text: "Add disk"
  newVmAddDisk: ',הוסף דיסק'

  // Original text: "Summary"
  newVmSummaryPanel: 'סיכום',

  // Original text: "Create"
  newVmCreate: 'יצירה',

  // Original text: "Reset"
  newVmReset: 'אתחול',

  // Original text: "Select template"
  newVmSelectTemplate: 'בחר תבנית',

  // Original text: "SSH key"
  newVmSshKey: 'SSH key',

  // Original text: "Config drive"
  newVmConfigDrive: 'הגדר כונן',

  // Original text: "Custom config"
  newVmCustomConfig: 'הגדרה מותאמת אישית',

  // Original text: "Boot VM after creation"
  newVmBootAfterCreate: 'טען מכונה וירטואלית לאחר יצירה',

  // Original text: "Auto-generated if empty"
  newVmMacPlaceholder: 'נוצר אוטומטית אם ריק',

  // Original text: "CPU weight"
  newVmCpuWeightLabel: 'גודל CPU',

  // Original text: "Quarter (1/4)"
  newVmCpuWeightQuarter: 'רבע',

  // Original text: "Half (1/2)"
  newVmCpuWeightHalf: 'חצי',

  // Original text: "Normal"
  newVmCpuWeightNormal: 'נורמלי',

  // Original text: "Double (x2)"
  newVmCpuWeightDouble: 'כפול',

  // Original text: "Cloud config"
  newVmCloudConfig: 'הגדרת הענן',

  // Origingal text: "Create VMs"
  newVmCreateVms: 'צור מכונות וירטואליות',

  // Original text : "Are you sure you want to create {nbVms} VMs?"
  newVmCreateVmsConfirm: 'האם אתה בטוח שברצונך ליצור nbVms?',

  // Original text : "Multiple VMs"
  newVmMultipleVms: 'מספר מכונות וירטואליות',

  // Original text: "Resource sets"
  resourceSets: 'קבוצת משאבים',

  // Original text: "Resource set name"
  resourceSetName: 'שם של קבוצת משאבים',

  // Original text: "Creation and edition"
  resourceSetCreation: 'יצירה ועריכה',

  // Original text: "Save"
  saveResourceSet: 'שמירה',

  // Original text: "Reset"
  resetResourceSet: 'אתחול',

  // Original text: "Edit"
  editResourceSet: 'ערוך',

  // Original text: "Delete"
  deleteResourceSet: 'מחק',

  // Original text: "Delete resource set"
  deleteResourceSetWarning: 'מחק קבוצת משאבים',

  // Original text: "Are you sure you want to delete this resource set?"
  deleteResourceSetQuestion: 'האם אתה בטוח שברצונך למחוק את קבוצת משאבים זו?',

  // Original text: "Missing objects:"
  resourceSetMissingObjects: 'אובייקטים חסרים',

  // Original text: "vCPUs"
  resourceSetVcpus: 'vCPUs',

  // Original text: "Memory"
  resourceSetMemory: 'זיכרון',

  // Original text: "Storage"
  resourceSetStorage: 'אחסון',

  // Original text: "Unknown"
  unknownResourceSetValue: 'לא ידוע',

  // Original text: "Available hosts"
  availableHosts: 'שרתים זמינים',

  // Original text: "Excluded hosts"
  excludedHosts: 'שרתים שאינם נכללים',

  // Original text: "No hosts available."
  noHostsAvailable: 'אין שרתים זמינים',

  // Original text: "VMs created from this resource set shall run on the following hosts."
  availableHostsDescription: 'מכונות וירטואליות שנבנו מקבוצת משאבים זו צריכות לרוץ על שרתים אלו',

  // Original text: "Maximum CPUs"
  maxCpus: 'CPUs',

  // Original text: "Maximum RAM (GiB)"
  maxRam: 'מקסימום RAM(GiB)',

  // Original text: "Maximum disk space"
  maxDiskSpace: 'מקסימום מקום על דיסק',

  // Original text: "No limits."
  noResourceSetLimits: 'ללא גבולות',

  // Original text: "Total:"
  totalResource: 'סה"כ',

  // Original text: "Remaining:"
  remainingResource: 'נשאר',

  // Original text: "Used:"
  usedResource: 'מנוצל',

  // Original text: "Try dropping some backups here, or click to select backups to upload. Accept only .xva files."
  importVmsList: 'נסה לשים גיבויים כאן או לחץ כדי לבחור גיבוי שברצונך לטעון (רק קבצי .xva)',

  // Original text: "No selected VMs."
  noSelectedVms: 'לא נבחרו מכונות וירטואליות',

  // Original text: "To Pool:"
  vmImportToPool: 'לרשימה',

  // Original text: "To SR:"
  vmImportToSr: 'ל-SR',

  // Original text: "VMs to import"
  vmsToImport: 'מכונות וירטואליות לייבוא',

  // Original text: "Reset"
  importVmsCleanList: 'אתחול',

  // Original text: "VM import success"
  vmImportSuccess: 'ייבוא מכונה וירטואלית בוצע בהצלחה',

  // Original text: "VM import failed"
  vmImportFailed: 'ייבוא מכונה וירטואלית נכשל',

  // Original text: "Import starting…"
  startVmImport: 'ייבוא מתחיל',

  // Original text: "Export starting…"
  startVmExport: 'ייצוא מתחיל',

  // Original text: "No pending tasks"
  noTasks: 'אין משימות בהמתנה',

  // Original text: "Currently, there isn't any pending XenServer tasks"
  xsTasks: 'כרגע אין שום משימות בהמתנה של XenServer',

  // Original text: "delta"
  delta: 'דלטא',

  // Original text: "Restore Backups"
  restoreBackups: 'שחזור הגיבויים',

  // Original text: "No remotes"
  noRemotes: 'אין חבורים מרחוק',

  // Original text: "enabled"
  remoteEnabled: 'מופעל',

  // Original text: "error"
  remoteError: 'שגיאה',

  // Original text: "No backups available"
  noBackup: 'אין גיבויים זמינים',

  // Original text: "Shutdown host"
  stopHostModalTitle: 'כבה שרת',

  // Original text: "This will shutdown your host. Do you want to continue?"
  stopHostModalMessage: 'זה יכבה את השרת שלך, האם ברצונך להמשיך? ',

  // Original text: "Restart host"
  restartHostModalTitle: 'הפעל שרת מחדש',

  // Original text: "This will restart your host. Do you want to continue?"
  restartHostModalMessage: 'זה יאתחל את השרת, האם ברצונך להמשיך?',

  // Original text: "Restart VM"
  restartVmModalTitle: 'אתחול מכונה וירטואלית',

  // Original text: "Are you sure you want to restart {name}?"
  restartVmModalMessage: 'אם אתה בטוח שברצונך לאתחל מכונה וירטואלית זו?',

  // Original text: "Stop VM"
  stopVmModalTitle: 'עצור מכונה וירטואלית',

  // Original text: "Are you sure you want to stop {name}?"
  stopVmModalMessage: 'האם אתה בטוח שברצונך לעצור מכונה וירטואלית זו?',

  // Original text: "Start VM{vms, plural, one {} other {s}}"
  startVmsModalTitle: undefined,

  // Original text: "Are you sure you want to start {vms} VM{vms, plural, one {} other {s}}?"
  startVmsModalMessage: undefined,

  // Original text: "Stop VM{vms, plural, one {} other {s}}"
  stopVmsModalTitle: undefined,

  // Original text: "Are you sure you want to stop {vms} VM{vms, plural, one {} other {s}}?"
  stopVmsModalMessage: undefined,

  // Original text: "Restart VM{vms, plural, one {} other {s}}"
  restartVmsModalTitle: undefined,

  // Original text: "Are you sure you want to restart {vms} VM{vms, plural, one {} other {s}}?"
  restartVmsModalMessage: undefined,

  // Original text: "Snapshot VM{vms, plural, one {} other {s}}"
  snapshotVmsModalTitle: undefined,

  // Original text: "Are you sure you want to snapshot {vms} VM{vms, plural, one {} other {s}}?"
  snapshotVmsModalMessage: undefined,

  // Original text: "Delete VM"
  deleteVmModalTitle: 'מחר מכונה וירטואלית',

  // Original text: "Delete VM{vms, plural, one {} other {s}}"
  deleteVmsModalTitle: undefined,

  // Original text: "Are you sure you want to delete this VM? ALL VM DISKS WILL BE REMOVED"
  deleteVmModalMessage: 'האם אתה בטוח שברצונך למחוק מכונה וירטואלית זו? כל הדיסקים של המכונה ימחקו',

  // Original text: "Are you sure you want to delete {vms} VM{vms, plural, one {} other {s}}? ALL VM DISKS WILL BE REMOVED"
  deleteVmsModalMessage: undefined,

  // Original text: "Migrate VM"
  migrateVmModalTitle: 'מיגרציה של מכונה וירטואלית',

  // Original text: "Select a destination host:"
  migrateVmAdvancedModalSelectHost: 'בחר שרת יעד',

  // Original text: "Select a migration network:"
  migrateVmAdvancedModalSelectNetwork: 'בחר רשת של מיגרציה',

  // Original text: "For each VDI, select an SR:"
  migrateVmAdvancedModalSelectSrs: 'לכל VDI, בחר SR',

  // Original text: "For each VIF, select a network:"
  migrateVmAdvancedModalSelectNetworks: 'לכל VIF, בחר רשת',

  // Original text: "Name"
  migrateVmAdvancedModalName: 'שם',

  // Original text: "SR"
  migrateVmAdvancedModalSr: 'SR',

  // Original text: "VIF"
  migrateVmAdvancedModalVif: 'VIF',

  // Original text: "Network"
  migrateVmAdvancedModalNetwork: 'רשת',

  // Original text: "Import a {name} Backup"
  importBackupModalTitle: undefined,

  // Original text: "Start VM after restore"
  importBackupModalStart: 'בחר מכונה וירטואלית לאחר שחזור',

  // Original text: "Select your backup…"
  importBackupModalSelectBackup: 'בחר את הגיבוי שלך',

  // Original text: "Are you sure you want to remove all orphaned VDIs?"
  removeAllOrphanedModalWarning: 'האם אתה בטוח שברצונך למחוק את הכל ה-VDIs היתומים?',

  // Original text: "Remove all logs"
  removeAllLogsModalTitle: 'מחק את כל הלוגים',

  // Original text: "Are you sure you want to remove all logs?"
  removeAllLogsModalWarning: 'האם אתה בטוח שברצונך למחוק את כל הלוגים?',

  // Original text: "This operation is definitive."
  definitiveMessageModal: 'פעולה זו סופית',

  // Original text: "Previous SR Usage"
  existingSrModalTitle: 'שימוש קודם של SR',

  // Original text: "This path has been previously used as a Storage by a XenServer host. All data will be lost if you choose to continue the SR creation."
  existingSrModalText: 'נתיב זה היה כבר בשימוש כמקום אחסון על ידי שרת ה-XenServer. כל הנתונים ימחקו אם תבחר להמשיך ביצירת ה-SR',

  // Original text: "Previous LUN Usage"
  existingLunModalTitle: 'שימוש קודם של ה-LUN',

  // Original text: "This LUN has been previously used as a Storage by a XenServer host. All data will be lost if you choose to continue the SR creation."
  existingLunModalText: 'LUN זה היה כבר בשימוש כמקום אחסון על ידי ה-XenServer. כל המידע ימחק אם תבחר להמשיך ביצירת ה-SR',

  // Original text: "Replace current registration?"
  alreadyRegisteredModal: 'החלף הרשמה נוכחית',

  // Original text: "Your XO appliance is already registered to {email}, do you want to forget and replace this registration ?"
  alreadyRegisteredModalText: undefined,

  // Original text: "Ready for trial?"
  trialReadyModal: 'מוכן לתקופת ההתנסות',

  // Original text: "During the trial period, XOA need to have a working internet connection. This limitation does not apply for our paid plans!"
  trialReadyModalText: 'במשך תקופת ההתנסות, חייב שיהיה חיבור אינטרנט ל-XOA. ההגבלה לא תקפה על התכניות שלנו שבתשלום.',

  // Original text: "Host"
  serverHost: 'שרת',

  // Original text: "Username"
  serverUsername: 'שם משתמש',

  // Original text: "Password"
  serverPassword: 'סיסמה',

  // Original text: "Action"
  serverAction: 'פעולה',

  // Original text: "Read Only"
  serverReadOnly: 'לקריאה בלבד',

  // Original text: "Copy VM"
  copyVm: 'העתק מכונה  וירטאלית',

  // Original text: "Are you sure you want to copy this VM to {SR}?"
  copyVmConfirm: 'האם אתה בטוח שברצונך להעתיק את המכונה הוירטואלית ל-SR?',

  // Original text: "Name"
  copyVmName: 'שם',

  // Original text: "If empty: name of the copied VM"
  copyVmNamePlaceholder: 'אם ריק: שם של המכונה הוירטואלית שהועתקה',

  // Original text: "Select SR"
  copyVmSelectSr: 'בחר SR',

  // Original text: "Use compression"
  copyVmCompress: 'השוואת שימוש',

  // Original text: "Create network"
  newNetworkCreate: 'צור רשת',

  // Original text: "Interface"
  newNetworkInterface: 'ממשק',

  // Original text: "Name"
  newNetworkName: 'שם',

  // Original text: "Description"
  newNetworkDescription: 'תיאור',

  // Original text: "VLAN"
  newNetworkVlan: 'VLAN',

  // Original text: "No VLAN if empty"
  newNetworkDefaultVlan: 'אם ריק אז בלי VLAN',

  // Original text: "MTU"
  newNetworkMtu: 'MTU',

  // Original text: "Default: 1500"
  newNetworkDefaultMtu: 'ברירת מחדל:1500',

  // Original text: "Delete network"
  deleteNetwork: 'מחר רשת',

  // Original text: "Are you sure you want to delete this network?"
  deleteNetworkConfirm: 'האם אתה בטוח שברצונך למחוק רשת זו?',

  // Original text: "Xen Orchestra"
  xenOrchestra: 'Xen Orchestra',

  // Original text: "server"
  xenOrchestraServer: 'מכונה',

  // Original text: "web client"
  xenOrchestraWeb: 'קליינט רשת',

  // Original text: "No pro support provided!"
  noProSupport: 'תמיכה מקצועית לא מסופקת',

  // Original text: "Use in production at your own risks"
  noProductionUse: 'שימוש בסביבת פרודקשן על אחריותך בלבד',

  // Original text: "You can download our turnkey appliance at"
  downloadXoa: 'אתה יכול להוריד את ה-turnkey appliance  שלנו ב...',

  // Original text: "Bug Tracker"
  bugTracker: 'ניתור באגים',

  // Original text: "Issues? Report it!"
  bugTrackerText: 'יש בעיות? דווח אותם',

  // Original text: "Community"
  community: 'קהילה',

  // Original text: "Join our community forum!"
  communityText: 'הצטרף לקהילת הפורום שלנו',

  // Original text: "Free Trial for Premium Edition!"
  freeTrial: 'גרסת ההתנסות בחינם למהדורת פרמיום',

  // Original text: "Request your trial now!"
  freeTrialNow: 'בקש גרסת ההתנסות עכשיו',

  // Original text: "Any issue?"
  issues: 'יש בעיות?',

  // Original text: "Problem? Contact us!"
  issuesText: 'יש בעיות? צור איתנו קשר',

  // Original text: "Documentation"
  documentation: 'דוקומנטציה',

  // Original text: "Read our official doc"
  documentationText: 'קרא את המסמך הרשמי שלנו',

  // Original text: "Pro support included"
  proSupportIncluded: 'תמיכה מקצועית נכללת',

  // Original text: "Acces your XO Account"
  xoAccount: 'גש לחשבון ה-XO שלך',

  // Original text: "Report a problem"
  openTicket: 'דווח על בעיה',

  // Original text: "Problem? Open a ticket !"
  openTicketText: 'יש בעיה? פתח קריאה',

  // Original text: "Upgrade needed"
  upgradeNeeded: 'דרוש שדרוג',

  // Original text: "Upgrade now!"
  upgradeNow: 'שדרג עכשיו',

  // Original text: "Or"
  or: 'או',

  // Original text: "Try it for free!"
  tryIt: 'נסה בחינם',

  // Original text: "This feature is available starting from {plan} Edition"
  availableIn: undefined,

  // Original text: "Registration"
  registration: 'הרשמה',

  // Original text: "Trial"
  trial: 'גרסת ההתנסות',

  // Original text: "Settings"
  settings: 'הגדרות',

  // Original text: "Update"
  update: 'עדכון',

  // Original text: "Upgrade"
  upgrade: 'שדרוג',

  // Original text: "No updater available for Community Edition"
  noUpdaterCommunity: 'אין מעדכן זמין לגרסת קומיוניטי',

  // Original text: "Please consider subscribe and try it with all features for free during 15 days on"
  noUpdaterSubscribe: 'נא שקול הרשמה ונסה את הגרסה עם כל הפיצ\'רים בחינם לשמך 15 יום',

  // Original text: "Manual update could break your current installation due to dependencies issues, do it with caution"
  noUpdaterWarning: 'עדכון ידני יכול להרוס את ההתקנה הנוכחית כתוצאה מבעיות תלות. עשה זאת בזהירות',

  // Original text: "Current version:"
  currentVersion: 'גרסה נוכחית',

  // Original text: "Register"
  register: 'הרשמה',

  // Original text: "Please, take time to register in order to enjoy your trial."
  trialRegistration: 'קח את הזמן להירשם כדי להנות מהגרסת ההתנסות שלך',

  // Original text: "Start trial"
  trialStartButton: 'הפעל את גרסת ההתנסות',

  // Original text: "You can use a trial version until {date, date, medium}. Upgrade your appliance to get it."
  trialAvailableUntil: undefined,

  // Original text: "Your trial has been ended. Contact us or downgrade to Free version"
  trialConsumed: 'גרסת ההתנסות שלך הסתיימה. נא צור קשר איתנו או הורד את הגרסה לחינמית.',

  // Original text: "Your xoa-updater service appears to be down. Your XOA cannot run fully without reaching this service."
  trialLocked: 'שירותי ה-xoa-updater לא פעילים. ה-XOA שלך לא יכול לרוץ מצורה מלאה בלי גישה לשירותים אלו ',

  // Original text: "Xen Orchestra from the sources"
  disclaimerTitle: 'Xen Orchestra מהמקורות',

  // Original text: "You are using XO from the sources! That's great for a personal/non-profit usage."
  disclaimerText1: 'אתה משתמש ב-XO מהמקורות. זה טוב לשימוש פרטי או לא רווחי',

  // Original text: "If you are a company, it's better to use it with our appliance + pro support included:"
  disclaimerText2: 'אם אתה חברה, עדיף להשתמש ב-Appliance שכולל תמיכה מקצועית',

  // Original text: "This version is not bundled with any support nor updates. Use it with caution for critical tasks."
  disclaimerText3: 'לגרסה זו לא מצורפת שם תמיכה או עדכונים. השתמש בה בזהירות למשימות קריטיות',

  // Original text: "Connect PIF"
  connectPif: 'חבר PIF',

  // Original text: "Are you sure you want to connect this PIF?"
  connectPifConfirm: 'האם אתה בטוח שברצונך לחבר PIF זה?',

  // Original text: "Disconnect PIF"
  disconnectPif: 'נתק PIF',

  // Original text: "Are you sure you want to disconnect this PIF?"
  disconnectPifConfirm: 'האם אתה בטוח שברצונך לנתק PIF זה?',

  // Original text: "Delete PIF"
  deletePif: 'מחק PIF',

  // Original text: "Are you sure you want to delete this PIF?"
  deletePifConfirm: 'האם אתה בטוח שברצונך למחןק PIF זה?'
}
