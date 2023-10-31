import { Injectable } from '@angular/core';
import { TreeviewItem, TreeviewSelection, DefaultTreeviewI18n } from 'angular-treeview';

@Injectable()
export class DropdownTreeviewSelectI18n extends DefaultTreeviewI18n {
  private internalSelectedItem: TreeviewItem;

  set selectedItem(value: TreeviewItem) {
    this.internalSelectedItem = value;
  }

  get selectedItem(): TreeviewItem {
    return this.internalSelectedItem;
  }

  override getText(selection: TreeviewSelection): string {
    return this.internalSelectedItem ? this.internalSelectedItem.text : 'Please select';
  }
}
