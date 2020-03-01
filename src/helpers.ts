import useMediaQuery from '@material-ui/core/useMediaQuery';

export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 640px');
}
