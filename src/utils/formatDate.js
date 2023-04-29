import { formatDistanceToNow, format } from 'date-fns';

export function formatDateToNow(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatDate( date ) {
  return format(new Date(2014, 1, 11), 'Pp');
}
