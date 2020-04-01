const NotificationsTable = () => ({
  title: 'Notifications',
  columns: [
    { title: 'Adı', field: 'name' },
    {
      title: 'Soyadı',
      field: 'surname',
    },
    {
      title: 'Doğum Yılı',
      field: 'birthYear',
      cellStyle: {
        textAlign: 'center',
      },
      headerStyle: {
        textAlign: 'center',
      },
    },
    {
      title: 'Doğum Yeri',
      field: 'birthCity',
      lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    },
  ],
  options: {
    pageSize: 10,
    header: false,
    filtering: false,
    search: false,
    pageSizeOptions: [10],
  },
});

export default NotificationsTable;
