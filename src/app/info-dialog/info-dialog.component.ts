import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { getAlbumCover } from '../shared';

export interface IInfoDialogData {
  playlist: SpotifyApi.SinglePlaylistResponse;
  playlistLength: number;
}

@Component({
  selector: 'sort-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IInfoDialogData,
  ) {}

  get albumCover(): string {
    return getAlbumCover(this.data.playlist, true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
